# Futuristic 3D Solar System

An interactive 3D solar system simulation built with Three.js, featuring realistic planetary motion, interactive controls, and futuristic visual effects.

## Features

- Realistic 3D model of the solar system with all 8 planets
- Saturn's iconic rings
- Starfield background with thousands of stars
- Space dust particle effects
- Orbital paths for all planets
- Interactive camera controls (orbit, zoom, pan)
- Planet information panels on click
- Simulation speed control
- Toggle for showing/hiding orbital paths
- Reset view button
- dat.GUI interface for advanced controls
- Responsive design

## Technologies Used

- Three.js for 3D rendering
- dat.GUI for interactive controls
- Express.js for local server
- HTML5, CSS3, and JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

#### Development Mode (with Vite)
```
npm run dev
```
This will start the development server, typically on port 5173.

#### Production Mode (with Node.js server)
```
npm start
```
This will start the Express server on port 3002.

### Controls

- **Mouse Drag**: Rotate the camera around the solar system
- **Mouse Wheel**: Zoom in and out
- **Right Click + Drag**: Pan the camera
- **Planet Click**: Show information about the selected planet
- **Simulation Speed Slider**: Control the speed of planetary motion
- **Toggle Orbits Button**: Show/hide orbital paths
- **Reset View Button**: Return to the initial camera position
- **dat.GUI Panel**: Advanced controls for lighting and other effects

## Project Structure

- `index.html`: Main HTML file
- `main.js`: Three.js implementation and application logic
- `server.js`: Express server for production mode
- `package.json`: Project dependencies and scripts
- `CHANGELOG.md`: Project change history

## Customization

You can customize various aspects of the simulation:

- Adjust planetary sizes, distances, and speeds in the `planetData` array
- Modify visual effects by changing material properties
- Author-mohammed.bilal.d
- Add new planets or celestial bodies by extending the existing code
- Customize the UI by modifying the HTML and CSS

## License

This project is open source and available under the MIT License.

## Author 
mohammed.bilal.d
