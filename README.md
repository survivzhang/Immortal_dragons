# Immortal_dragons

## React + Three.js + WebGL Portfolio Application

## Technical Implementation

### Core Technologies

- **Next.js**: Framework for server-rendered React applications
- **Three.js**: JavaScript 3D library that makes WebGL simpler
- **React**: JavaScript library for building user interfaces
- **WebGL**: Web Graphics Library for rendering interactive 2D and 3D graphics

### Key Components

#### 1. Interactive 3D Earth Globe

The application features a fully interactive 3D Earth globe rendered with Three.js. It includes realistic textures, lighting effects, and custom markers for locations.

```javascript
// Implementation highlights from EarthGlobe.js
// - Uses THREE.SphereGeometry for the earth base
// - Applies realistic textures with bump mapping
// - Custom location markers with labels
// - Interactive OrbitControls for user manipulation
```

![Earth Globe Screenshot](assets/3D_earth.png)

<!-- Screenshot placeholder - Earth Globe component -->

#### 2. 3D Text Rendering

Custom 3D text elements created with Three.js TextGeometry, featuring dynamic lighting, animations, and responsive sizing.

```javascript
// Implementation highlights from Text3D.js
// - FontLoader and TextGeometry for 3D text creation
// - Phong material with specular highlights
// - Smooth animations with sine wave motion
// - Responsive design for different device sizes
```

![3D Text Screenshot](assets/3DText.png)

<!-- Screenshot placeholder - 3D Text component -->

#### 3. Interactive Canvas Background

A dynamic canvas-based background with particle effects that respond to user mouse movements.

```javascript
// Implementation highlights from canvasbg.js
// - HTML5 Canvas for efficient particle rendering
// - Physics-based mouse interaction
// - Responsive to viewport changes
// - Optimized performance with requestAnimationFrame
```

![Canvas Background Screenshot](assets/canvasbg.png)

<!-- Screenshot placeholder - Canvas background -->

#### 4. Animation Effects

Various animation effects implemented throughout the application:

- Parallax scrolling effects
- Burning text effect
- 3D object animations
- Interactive UI elements

![Animation Effects Screenshot](assets/flametext.png)

<!-- Screenshot placeholder - Animation effects -->

### Responsive Design

The application is fully responsive, with specific optimizations for:

- Mobile devices (reduced geometry complexity, adjusted camera positioning)
- Tablets
- Desktop browsers

![Moblie Effects Screenshot](assets/moblie.png)

### Performance Optimizations

- Dynamic import of heavy components
- Canvas optimization techniques
- Three.js scene cleanup on component unmount
- Event listener management

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
