/*
** Entrega: AGM
** @author: triceratroll
** @date: 13-03-2022
*/

Physijs.scripts.worker = 'lib/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

// Variables globales estandar
var renderer, scene, camera;

// Otras variables
var angulo = 0 ;
var antes = Date.now();
var esfera;
var conjunto;
var conjunto_2;
var conjunto_letras;
var espacio;
var cubo;
var sun;
var path = "images/"; 

//Controladores 
var cameraControl, effectControl;

init();
loadScene(); 
render();

function init() {
	// Funcion de inicializacion de motor, escena y camara

	// Motor de render
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( new THREE.Color(0x000000) );
	document.getElementById('container').appendChild(renderer.domElement); 

	// Escena 
	//scene = new THREE.Scene();
	scene = new Physijs.Scene;
	scene.setGravity(new THREE.Vector3(0, 0, 0));

	// Camara
	var aspectRatio = window.innerWidth/window.innerHeight;
	camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 100 );
	camera.position.set( 10, 10, 10 );
	camera.lookAt( new THREE.Vector3( 0,0,0));

    // //Controlador de camara
    // cameraControl = new THREE.OrbitControls(camera, renderer.domElement);
    // cameraControl.target.set(0,0,0);
    // cameraControl.noZoom = false; 

}

function loadScene() {

	// Construye el grafo de escena
	// - Objetos (geometria, material)
	// - Transformaciones 
	// - Organizar el grafo

	conjunto = new THREE.Object3D();
	conjunto.position.y = 10;

	conjunto_2 = new THREE.Object3D();
	conjunto_2.position.y = 10;

	espacio= new THREE.Object3D();
	espacio.position.y = 10;

	// Cubo contenedor de la nave
	cubo = new Physijs.BoxMesh( //Cuidado que importa de Physijs
		new THREE.CubeGeometry( 4, 4, 4 ),
		new THREE.MeshBasicMaterial({ visible: false, wireframe:true })
	); 
	cubo.position.z = -20;
    cubo.position.y = 1.5;

	// Esfera 1
	var texPlaneta = new THREE.TextureLoader().load( path + "plywood.jpg");
	var geoEsfera = new THREE.SphereGeometry( 2, 30, 30 );
	var material = new THREE.MeshLambertMaterial( {color:0x1DA1F2, wireframe: false, map:texPlaneta} );
	esfera = new THREE.Mesh( geoEsfera, material );
	esfera.position.x = 15; 

	// Orbita 1
	var esferaOrbita= new THREE.SphereGeometry( 4, 20, 20 );
	var esferaMaterial = new THREE.MeshBasicMaterial( {visible: false, wireframe: true} );
	orbita = new THREE.Mesh( esferaOrbita, esferaMaterial );
	orbita.position.x = 15;

	// Esfera 2
	var texPlaneta_2 = new THREE.TextureLoader().load(path + "planet_3.jpg");
	var geoEsfera_2 = new THREE.SphereGeometry( 2, 30, 30 );
	var material_2 = new THREE.MeshLambertMaterial( {color:0x0e76a8, wireframe: false, map:texPlaneta_2} );
	esfera_2 = new THREE.Mesh( geoEsfera_2, material_2 );
	esfera_2.position.x = -20;
	esfera_2.position.z = -20; 

	// Orbita 2
	var esferaOrbita_2= new THREE.SphereGeometry( 4, 20, 20 );
	var esferaMaterial_2 = new THREE.MeshBasicMaterial( {visible: false, wireframe: true} );
	orbita_2 = new THREE.Mesh( esferaOrbita_2, esferaMaterial_2 );
	orbita_2.position.x = -20;
	orbita_2.position.z = -20; 

	// Esfera 3
	var texPlaneta_3 = new THREE.TextureLoader().load(path + "planet.jpg");
	var geoEsfera_3 = new THREE.SphereGeometry( 4, 30, 30 );
	var material_3 = new THREE.MeshLambertMaterial( {color:0x808080, wireframe: false, map:texPlaneta_3} );
	esfera_3 = new THREE.Mesh( geoEsfera_3, material_3 );
	esfera_3.position.z = 30;

	// Orbita 3
	var esferaOrbita_3= new THREE.SphereGeometry( 6, 20, 20 );
	var esferaMaterial_3 = new THREE.MeshBasicMaterial( {visible: false, wireframe: true} );
	orbita_3 = new THREE.Mesh( esferaOrbita_3, esferaMaterial_3 );
	orbita_3.position.z = 30;
	

	// Esfera 4
	var texPlaneta_4 = new THREE.TextureLoader().load(path + "planet.jpg");
	var geoEsfera_4 = new THREE.SphereGeometry( 4, 40, 40 );
	var material_4 = new THREE.MeshBasicMaterial( {color:0x572364, wireframe: false, map:texPlaneta_4} );
	esfera_4 = new THREE.Mesh( geoEsfera_4, material_4 );
	esfera_4.position.z = -40;
	esfera_4.position.x = 20;

	// Orbita 4
	var esferaOrbita_4= new THREE.SphereGeometry( 6, 20, 20 );
	var esferaMaterial_4 = new THREE.MeshBasicMaterial( {visible: false, wireframe: true} );
	orbita_4 = new THREE.Mesh( esferaOrbita_4, esferaMaterial_4 );
	orbita_4.position.z = -40;
	orbita_4.position.x = 20;

	// Esfera
	var texPlaneta_5 = new THREE.TextureLoader().load(path + "planet_2.jpg");
	var geoEsfera_5 = new THREE.SphereGeometry( 6, 50, 50 );
	var material_5 = new THREE.MeshLambertMaterial( {color:'orange', wireframe: false, map:texPlaneta_5} );
	esfera_5 = new THREE.Mesh( geoEsfera_5, material_5 );
	esfera_5.position.z = -40;
	esfera_5.position.x = -40;

	// Orbita 5
	var esferaOrbita_5= new THREE.SphereGeometry( 8, 20, 20 );
	var esferaMaterial_5 = new THREE.MeshBasicMaterial( {visible: false, wireframe: true} );
	orbita_5 = new THREE.Mesh( esferaOrbita_5, esferaMaterial_5 );
	orbita_5.position.z = -40;
	orbita_5.position.x = -40;

	// Suelo
	var texGalaxy = new THREE.TextureLoader().load(path + "galaxy.png");
	var geoSuelo = new THREE.PlaneGeometry(400,400,120,120);
	var matSuelo = new THREE.MeshBasicMaterial( {map:texGalaxy, wireframe: false} );
	var suelo = new THREE.Mesh( geoSuelo, matSuelo );
	suelo.rotation.x = -Math.PI/2;
	suelo.position.y = -10; 

	//sun object 
	var texSun = new THREE.TextureLoader().load(path + "sun.jpg");
	var sun_geometry = new THREE.SphereGeometry( 8, 50, 50 );
	var sun_material = new THREE.MeshBasicMaterial({ map:texSun, });
	sun = new THREE.Mesh(sun_geometry, sun_material);
	sun.position.set(0, 0, 0); 

	// Objeto importado
	var loader = new THREE.ObjectLoader();
	loader.load( 'models/x-wing/star-wars-x-wing.json', 
		         function (objeto){
                    objeto.scale.set(0.4,0.4,0.4);
                    objeto.position.y = -1;
		         	//objeto.rotation.y = Math.PI/2;
		         	cubo.add(objeto);
		         });

	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

		var textGeo = new THREE.TextGeometry( "@twitter", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var textGeo_2 = new THREE.TextGeometry( "adrianmf06", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var modifier = new THREE.BendModifier(); 
		textGeo.computeBoundingBox();
		var centerOffset = + 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x1DA1F2, specular: 0xfff000 } );

		var mesh = new THREE.Mesh( textGeo, textMaterial );
		mesh.position.x = centerOffset;
		mesh.position.y = 4;
		mesh.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 4;
		
		modifier.set( dir, ax, ang ).modify(textGeo); 
		orbita.add( mesh );

		///////////////////	

		var centerOffset_2 = + 0.6 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x1DA1F2, specular: 0x004400 } );
		var mesh2 = new THREE.Mesh( textGeo_2, textMaterial );

		mesh2.position.x = -centerOffset_2;
		mesh2.position.y = -4;
		mesh2.rotation.z = Math.PI;
		mesh2.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 4;

		modifier.set( dir, ax, ang ).modify(textGeo_2);
		orbita.add( mesh2 ); 
	} );

	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

		var textGeo = new THREE.TextGeometry( "Linked In", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var textGeo_2 = new THREE.TextGeometry( "Adrian-Munyoz", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var modifier = new THREE.BendModifier(); 
		textGeo.computeBoundingBox();
		var centerOffset = + 0.5  * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x0e76a8, specular: 0xfff000 } );

		var mesh = new THREE.Mesh( textGeo, textMaterial );
		mesh.position.x = centerOffset;
		mesh.position.y = 4;
		mesh.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 3.5;
		
		modifier.set( dir, ax, ang ).modify(textGeo); 
		orbita_2.add( mesh );

		///////////////////	

		var centerOffset_2 = + 0.8 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x0e76a8, specular: 0x004400 } );
		var mesh2 = new THREE.Mesh( textGeo_2, textMaterial );

		mesh2.position.x = -centerOffset_2;
		mesh2.position.y = -4;
		mesh2.rotation.z = Math.PI;
		mesh2.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 4;

		modifier.set( dir, ax, ang ).modify(textGeo_2);
		orbita_2.add( mesh2 ); 
	} );

	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

		var textGeo = new THREE.TextGeometry( "Github", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var textGeo_2 = new THREE.TextGeometry( "Triceratroll", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1, 
			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var modifier = new THREE.BendModifier(); 
		textGeo.computeBoundingBox();
		var centerOffset = + 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x808080, specular: 0xfff000 } );

		var mesh = new THREE.Mesh( textGeo, textMaterial );
		mesh.position.x = centerOffset;
		mesh.position.y = 6;
		mesh.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 5;
		
		modifier.set( dir, ax, ang ).modify(textGeo); 
		orbita_3.add( mesh );

		///////////////////	

		var centerOffset_2 = + 0.7 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x808080, specular: 0x004400 } );
		var mesh2 = new THREE.Mesh( textGeo_2, textMaterial );

		mesh2.position.x = -centerOffset_2;
		mesh2.position.y = -6;
		mesh2.rotation.z = Math.PI;
		mesh2.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 5;

		modifier.set( dir, ax, ang ).modify(textGeo_2);
		orbita_3.add( mesh2 ); 
	} );

	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

		var textGeo = new THREE.TextGeometry( "BTC - Tippin.me", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var textGeo_2 = new THREE.TextGeometry( "adrianmf06", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1, 
			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var modifier = new THREE.BendModifier(); 
		textGeo.computeBoundingBox();
		var centerOffset = + 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x572364, specular: 0xfff000 } );

		var mesh = new THREE.Mesh( textGeo, textMaterial );
		mesh.position.x = centerOffset;
		mesh.position.y = 6;
		mesh.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 5;
		
		modifier.set( dir, ax, ang ).modify(textGeo); 
		orbita_4.add( mesh );

		///////////////////	

		var centerOffset_2 = + 0.4 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: 0x572364, specular: 0x004400 } );
		var mesh2 = new THREE.Mesh( textGeo_2, textMaterial );

		mesh2.position.x = -centerOffset_2;
		mesh2.position.y = -6;
		mesh2.rotation.z = Math.PI;
		mesh2.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 5;

		modifier.set( dir, ax, ang ).modify(textGeo_2);
		orbita_4.add( mesh2 ); 
	} );

	var loader = new THREE.FontLoader();
	loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

		var textGeo = new THREE.TextGeometry( "MyPersonal Project", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var textGeo_2 = new THREE.TextGeometry( "Journalio Wallet", {

			font: font,

			size: 1,
			height: 0.1,
			curveSegments: 1,

			bevelThickness:  0.02,
			bevelSize: 0.01,
			bevelEnabled: true

		} );

		var modifier = new THREE.BendModifier(); 
		textGeo.computeBoundingBox();
		var centerOffset = + 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: "orange", specular: 0xfff000 } );

		var mesh = new THREE.Mesh( textGeo, textMaterial );
		mesh.position.x = centerOffset;
		mesh.position.y = 9;
		mesh.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 4;
		
		modifier.set( dir, ax, ang ).modify(textGeo); 
		orbita_5.add( mesh );

		///////////////////	

		var centerOffset_2 = + 0.4 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x ); 
		var textMaterial = new THREE.MeshPhongMaterial( { color: "orange", specular: 0x004400 } );
		var mesh2 = new THREE.Mesh( textGeo_2, textMaterial );

		mesh2.position.x = -centerOffset_2;
		mesh2.position.y = -9;
		mesh2.rotation.z = Math.PI; 
		mesh2.rotation.y = Math.PI;

		var dir = new THREE.Vector3( 0, -1, 0 );
		var ax =  new THREE.Vector3( 0, 0, 1 );
		var ang = Math.PI / 5;

		modifier.set( dir, ax, ang ).modify(textGeo_2);
		orbita_5.add( mesh2 ); 
	} );
	
	
	// Entorno
	var entorno = [ path+"galaxy.png", path+"galaxy.png",
	                path+"galaxy.png", path+"galaxy.png",
	                path+"galaxy.png", path+"galaxy.png",];

	var texEsfera = new THREE.CubeTextureLoader().load(entorno);
	var shader = THREE.ShaderLib.cube;
    shader.uniforms.tCube.value = texEsfera;

	var matParedes = new THREE.ShaderMaterial({
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader,
		uniforms: shader.uniforms,
		depthWrite: false,
		side: THREE.BackSide
	});

	var habitacion = new THREE.Mesh( new THREE.CubeGeometry(30,30,30), matParedes);
	scene.add(habitacion);

	// Grafo 
	espacio.add( cubo );

	conjunto.add( esfera );
	conjunto.add( orbita );
	conjunto.add( esfera_3 );
	conjunto.add( orbita_3);
	conjunto.add( esfera_4 );
	conjunto.add( orbita_4);
	conjunto.add( esfera_5 );
	conjunto.add( orbita_5 );

	conjunto_2.add( esfera_2 );
	conjunto_2.add(orbita_2) ;

	scene.add( conjunto );
	scene.add( conjunto_2 );
	scene.add( espacio ); 
	scene.add( suelo );
	scene.add( sun ); 
}

function detectCollisionCubes(object1, object2){

	object1.geometry.computeBoundingBox(); //not needed if its already calculated
	object2.geometry.computeBoundingBox();

	object1.updateMatrixWorld();
	object2.updateMatrixWorld();
	
	var box1 = object1.geometry.boundingBox.clone();
	box1.applyMatrix4(object1.matrixWorld);
  
	var box2 = object2.geometry.boundingBox.clone();
	box2.applyMatrix4(object2.matrixWorld);
  
	return box1.intersectsBox(box2);
}

var move_foward = 0, move_backward = 0, move_left = 0, move_right = 0; 
function move_XWing() {
	if (move_backward) { 
		cubo.translateZ( -0.0);
		cubo.__dirtyPosition = true;
	} else if (move_foward) { 
		cubo.translateZ( + 0.75 );
		cubo.__dirtyPosition = true;
	} else if (move_right) { 
		cubo.rotateY(-Math.PI/50);
		cubo.__dirtyRotation = true;
	}  else if (move_left) { 
		cubo.rotateY(Math.PI/50);
		cubo.__dirtyRotation = true;
	}
}

document.addEventListener("keydown", function(event) {
	// console.log(`Key pressed: ${event.key}`); 
	if(event.key == "w" || event.key == "W") { move_foward = 1; }
	if(event.key == "s" || event.key == "S") { move_backward = 1; }
	if(event.key == "a" || event.key == "A") { move_left = 1; }
	if(event.key == "d" || event.key == "D") { move_right = 1; }
	//console.log(move_foward,move_backward,move_left, move_right)
});


document.addEventListener("keyup", function(event) {
	// console.log(`Key pressed: ${event.key}`);
	if(event.key == "w" || event.key == "W") { move_foward = 0; }
	if(event.key == "s" || event.key == "S") { move_backward = 0; }
	if(event.key == "a" || event.key == "A") { move_left = 0; }
	if(event.key == "d" || event.key == "D") { move_right = 0; }
	//console.log(move_foward,move_backward,move_left, move_right)
});

function consola_de_vuelo() {
	if (detectCollisionCubes(cubo, sun)) {
	   	cubo.translateZ( -0.75 );
	   	cubo.__dirtyPosition = true; 
	} else if (cubo.position.x >= 120 || cubo.position.z >= 120 || cubo.position.x <= -120 || cubo.position.z <= -120) { 
		cubo.position.set(15,0,15); 
	}
} 


var twitter = false; linkedIn = false; github = false; tippin = false; journalio = false;
function aterrizar() { 

	if(detectCollisionCubes(cubo, esfera) && twitter == false) {  
		twitter = true;
		window.open('https://twitter.com/adrianmf06' , '_blank');
		move_foward = 0; move_left = 0, move_right = 0; 
	} else if ( detectCollisionCubes(cubo, esfera_2) && linkedIn == false) { 
		linkedIn = true;
		window.open('https://www.linkedin.com/in/adrian-mu%C3%B1oz-felder/', '_blank');
		move_foward = 0; move_left = 0, move_right = 0; 
	} else if (detectCollisionCubes(cubo, esfera_3) && github == false) { 
		github = true;
		window.open('https://github.com/Triceratroll', '_blank'); 
		move_foward = 0; move_left = 0, move_right = 0; 
	} else if (detectCollisionCubes(cubo, esfera_4) && tippin == false) { ; 
		tippin = true;
		window.open('https://tippin.me/@adrianmf06', '_blank'); 
		move_foward = 0; move_left = 0, move_right = 0; 
	} else if (detectCollisionCubes(cubo, esfera_5) && journalio == false) { 
		journalio = true;
		window.open('https://journaliowallet.com/', '_blank'); 
		move_foward = 0; move_left = 0, move_right = 0; 
	} else { 
		twitter = false; linkedIn = false; github = false; tippin = false; journalio = false;
	}
	
}

// Cambiar propiedades entre frames
function update()
{ 
    // Control del tiempo transcurrido 
    var ahora = Date.now(); 
	angulo -= Math.PI/20 * (ahora-antes) / 100;
    antes = ahora; 
	
	conjunto.rotation.y = angulo/10; 
	conjunto_2.rotation.y -= angulo/10;
	
	orbita.rotation.y = -angulo/10;
	orbita.rotation.z = -angulo/5;
	orbita_2.rotation.y = -angulo/10;
	orbita_2.rotation.z = -angulo/5;
	orbita_3.rotation.y = -angulo/10;
	orbita_3.rotation.z = -angulo/5;
	orbita_4.rotation.y = -angulo/10;
	orbita_4.rotation.z = -angulo/10;
	orbita_5.rotation.y = -angulo/10;
	orbita_5.rotation.z = -angulo/5;

	esfera.rotation.y = angulo/2; 
	esfera_2.rotation.y = angulo/4;
	esfera_3.rotation.y = -angulo/3;
	esfera_4.rotation.y = angulo/5;
	esfera_5.rotation.y = -angulo/8; 
	//console.log(cubo.rotation.y);

    // Actualizar segun la interfaz
    conjunto.position.y = 0;
	conjunto_2.position.y = 0; 
	espacio.position.y = 0;

	camera.position.set(cubo.position.x, cubo.position.y +10, cubo.position.z-15);
	camera.lookAt(cubo.position.x, cubo.position.y + 2.5, cubo.position.z); 

	move_XWing();
	consola_de_vuelo();
	aterrizar(); 
	//cameraControl.update(); 
} 
function render() {
	// Blucle de refresco
	scene.simulate(); // run physics
	requestAnimationFrame( render );
	update();
	renderer.render( scene, camera );
}