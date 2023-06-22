import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  CameraPreview,
  CameraPreviewOptions,
} from '@capacitor-community/camera-preview';

const cameraPreviewOptions: CameraPreviewOptions = {
  position: 'front',
  enableZoom: true,
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {
    CameraPreview.start(cameraPreviewOptions);
  }
}
