import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
  effect,
  inject,
} from '@angular/core';

import * as THREE from 'three';

import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-universe',
  standalone: true,
  templateUrl: './universe.component.html',
  styleUrl: './universe.component.scss',
})
export class UniverseComponent implements AfterViewInit, OnDestroy {
  private readonly themeService = inject(ThemeService);

  @ViewChild('canvas', { static: true })
  private readonly canvas!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private stars!: THREE.Group;
  private animationFrameId = 0;

  private mouseX = 0;
  private mouseY = 0;
  private starMaterials: THREE.PointsMaterial[] = [];

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;

    this.mouseY = (event.clientY / window.innerHeight) * 2 - 1;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngAfterViewInit(): void {
    if (!this.initScene()) {
      return;
    }
    this.createStars();
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);

    this.stars?.children.forEach((child) => {
      if (child instanceof THREE.Points) {
        child.geometry.dispose();

        if (child.material instanceof THREE.Material) {
          child.material.dispose();
        }
      }
    });

    this.renderer?.dispose();
    this.renderer?.forceContextLoss();

    this.starMaterials = [];
  }

  private readonly themeEffect = effect(() => {
    const theme = this.themeService.theme();

    if (!this.starMaterials.length) {
      return;
    }

    const color = theme === 'dark' ? 0xffffff : 0x27272a;

    for (const material of this.starMaterials) {
      material.color.setHex(color);
    }
  });

  private initScene(): boolean {
    const canvas = this.canvas.nativeElement;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    this.camera.position.z = 5;

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
    } catch (error) {
      console.warn('WebGL is unavailable. Universe animation disabled.', error);
      return false;
    }

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    return true;
  }
  private createStars(): void {
    this.stars = new THREE.Group();

    this.createStarLayer(1000, 0.04, 0.45);
    this.createStarLayer(350, 0.07, 0.65);
    this.createStarLayer(100, 0.12, 0.9);

    this.applyCurrentTheme();
    this.scene.add(this.stars);
  }

  private applyCurrentTheme(): void {
    const color = this.themeService.theme() === 'dark' ? 0xffffff : 0x27272a;

    for (const material of this.starMaterials) {
      material.color.setHex(color);
    }
  }

  private createStarLayer(count: number, size: number, opacity: number): void {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: this.themeService.theme() === 'dark' ? 0xffffff : 0x27272a,
      size,
      transparent: true,
      opacity,
      depthWrite: false,
    });

    this.starMaterials.push(material);

    const layer = new THREE.Points(geometry, material);

    this.stars.add(layer);
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    this.stars.rotation.y += 0.0003;
    this.stars.rotation.x += 0.0001;

    this.camera.position.x += (this.mouseX * 0.5 - this.camera.position.x) * 0.02;

    this.camera.position.y += (-this.mouseY * 0.5 - this.camera.position.y) * 0.02;

    this.renderer.render(this.scene, this.camera);
  }
}
