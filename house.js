const scene = document.querySelector('a-scene');
  let boxA = document.querySelector('#spin').addEventListener('click', function(evt){
    console.log('the box has sunk into the ground.')

    /*Attempt at making interractions
    var rotationA = evt.getAttribute('rotation');
    console.log('box is supposed to spin');
    boxA.setAttribute('animation__revolve', 'to', {x: 45, y: 45, z: 360});
    boxA.setAttribute('animation__revolve', 'from', {x:45, y:45, z:0});*/
  });


  let fences = document.querySelector('#fence-3d');
  let flowers = document.querySelector('#flower-3d');
  let tree = document.querySelector('#big-low-poly-tree3d')

  //creates trees movie theatre row
  for(let i=0; i <5; i++){
    let treeClone2 = tree.cloneNode(true);
    treeClone2.setAttribute('position', {x: 27.668 - 20 * i, y: -0.160, z:39.351});
    scene.appendChild(treeClone2);
  }

  //near the playground row
  for(let i=0; i <2; i++){
    let treeClone = tree.cloneNode(true);
    treeClone.setAttribute('position', {x: -30.999 - 20 * i, y: 0, z: -4.798});
    scene.appendChild(treeClone);
  }

  for(let i=0; i <21; i++){

    let fenceClone = fences.cloneNode(true);
    let flowerClone = flowers.cloneNode(true);
        fenceClone.setAttribute('position', {x: 5.406 + 10 * i, y: 0, z: 6.039});                                  
        flowerClone.setAttribute('position', {X: 1.465 * 10* i,y: 0,z: 5.026});
        scene.appendChild(fenceClone);
        scene.appendChild(flowerClone);
      }

      //To create .qrows of cars for the movie theater
      //Tip this can be done using 2d array instead
      let car1 = document.querySelector('#car-model');

      for(let i=0; i <5; i++){                         
        let clone1 = car1.cloneNode(true);
        clone1.setAttribute('position', {x: -8.652 + 8* i, y: 0.905, z: 68.235});       
        clone1.setAttribute('rotation', '0 180 0');
        scene.appendChild(clone1);
      }

      //To create another set of builings
      var building = document.querySelector('#building');

      //middle row 
      for(let i = 0; i <3; i++){
        let clone = building.cloneNode(true);
        clone.setAttribute('position', {x: 65.217 + 40*i,
          y: 1.756,
          z: 85.397})
        scene.appendChild(clone);
      }

      //back row
      for(let i = 0; i <4; i++){
        let clone = building.cloneNode(true);
        clone.setAttribute('position', {x: 65.217 + 40*i,
          y: 1.756,
          z: 118.032})
        scene.appendChild(clone);
      }

      //front row
      for(let i = 0; i <4; i++){
        let clone = building.cloneNode(true);
        clone.setAttribute('position', {x: 65.217 + 40*i,
          y: 1.756,
          z: 53.782})
        scene.appendChild(clone);
      }
      
      //To create tiny lanes
      var lanes = document.querySelector('#main-road');
      let lane1 = lanes.cloneNode(true);
      lane1.setAttribute('position', {x: 89.5, y: 0.061, z: 22.81});
      lane1.setAttribute('rotation', '90 0 0');
      lane1.setAttribute('scale', {x: 5.904, y: 0.061, z: 0.859});
      scene.appendChild(lane1);

      for(let i=0; i < 20; i++){

        //house 
        let wall = document.createElement('a-box')
        wall.setAttribute('color', 'yellow')
        wall.setAttribute('height', '10');
        wall.setAttribute('width', '5');
        wall.setAttribute('depth', '5');
        wall.setAttribute('position', {x: i * 10, y: 4.836, z: 0})
        scene.appendChild(wall);

        let roof = document.createElement('a-box');
        roof.setAttribute('material', {src: "#roof-flat"});
        roof.setAttribute('material', 'normal-map', '#roof-NRM');
        roof.setAttribute('material', 'displacement-map', '#roof-disp');
        roof.setAttribute('material', 'normal-texture-repeat', '1 1');
        roof.setAttribute('material', 'displacement-scale', '2 2');
        roof.setAttribute('material', 'displacement-texture-repeat', '1 1')
        roof.setAttribute('position', {x: i * 10, y: 10.314, z: 0});
        roof.setAttribute('height', '1');
        roof.setAttribute('depth', '5');
        roof.setAttribute('width', '5');
        scene.appendChild(roof);

        let door = document.createElement('a-plane')
        door.setAttribute('color', 'brown');
        door.setAttribute('width', '3');
        door.setAttribute('position', {x: -0.044 + 10* i, y: 1.362, z: 2.728});
        door.setAttribute('rotation', '0 0 90');
        scene.appendChild(door);

        let window = document.createElement('a-plane');
        window.setAttribute('material', {src: 'images/window.jpg'});
        window.setAttribute('rotation', '0 90 0');
        window.setAttribute('position', {x: -2.572 + 10 *i, y: 8.054, z: 0.051});
        window.setAttribute('side', 'double');
        window.setAttribute('width', '4');
        window.setAttribute('height', '3');
        scene.appendChild(window);

        let window2 = document.createElement('a-plane');
        window2.setAttribute('material', {src: 'images/window.jpg'});
        window2.setAttribute('rotation', '0 90 0');
        window2.setAttribute('position', {x: 2.585 + 10 *i, y: 4.096, z:0.051});
        window2.setAttribute('side', 'double');
        window2.setAttribute('width', '4');
        window2.setAttribute('height', '3');
        scene.appendChild(window2);

        let window3 = document.createElement('a-plane');
        window3.setAttribute('material', {src: 'images/window.jpg'});
        window3.setAttribute('rotation', '0 90 0');
        window3.setAttribute('position', {x: 2.585 + 10 *i, y:  8.054, z: 0.051});
        window3.setAttribute('side', 'double');
        window3.setAttribute('width', '4');
        window3.setAttribute('height', '3');
        scene.appendChild(window3);

        let window4 = document.createElement('a-plane');
        window4.setAttribute('material', {src: 'images/window.jpg'});
        window4.setAttribute('rotation', '0 90 0');
        window4.setAttribute('position', {x: -2.572 + 10 *i, y:  4.096, z: 0.051});
        window4.setAttribute('side', 'double');
        window4.setAttribute('width', '4');
        window4.setAttribute('height', '3');
        scene.appendChild(window4);

        //tree
        let trunk = document.createElement('a-cylinder');
        trunk.setAttribute('position', {x: 5.7+ 10*i, y: 2.040, z: -9.649});
        trunk.setAttribute('height', '3');
        trunk.setAttribute('color', 'brown');
        trunk.setAttribute('radius', '0.5')
        scene.appendChild(trunk);

        let leaf = document.createElement('a-icosahedron')
        leaf.setAttribute('position', {x: 15.700 + 10 *i, y: 6.910, z: -9.658});
        leaf.setAttribute('rotation', {x: i * 90/360, y:0, z: 0})
        //const radius = Math.random() * 4;
        leaf.setAttribute('radius', 6);
        leaf.setAttribute('color', 'green');
        leaf.setAttribute('material', {roughness: 5})
        scene.appendChild(leaf);
      }