<template>
  <div class="app-container">
    <div id="three"></div>
  </div>
</template>

<script>
/* eslint-disable */
import * as Stats from '../../assets/js/stats.min'
import * as THREE from '../../assets/js/three'

var scene = null
var camera = null
var renderer = null

var id = null

var stat = null
var ballMesh = null
var ballRadius = 0.5

export default {
  mounted() {
    this.init()
  },
  methods: {
    // init() {
    //   stat = new Stats()
    //   stat.domElement.style.position = 'absolute'
    //   stat.domElement.style.right = '0px'
    //   stat.domElement.style.top = '0px'
    //   document.body.appendChild(stat.domElement)
    //   renderer = new THREE.WebGLRenderer({
    //     canvas: document.getElementById('three'),
    //   })
    //   scene = new THREE.Scene()

    //   camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
    //   camera.position.set(5, 10, 20)
    //   camera.lookAt(new THREE.Vector3(0, 3, 0))
    //   scene.add(camera)

    //   // ball
    //   ballMesh = new THREE.Mesh(
    //     new THREE.SphereGeometry(ballRadius, 16, 8),
    //     new THREE.MeshLambertMaterial({
    //       color: 0xffff00,
    //     })
    //   )
    //   ballMesh.position.y = ballRadius
    //   scene.add(ballMesh)

    //   var light = new THREE.DirectionalLight(0xffffff)
    //   light.position.set(10, 10, 15)
    //   scene.add(light)
    // },

    /* stop() {
      console.log(a)
      var id = setInterval(this.draw(), 20)
      if (id !== null) {
        clearInterval(id)
        id = null
      }
      console.log('stop')
    },
    stats() {
      var stat = new Stats()
      stat.domElement.style.position = 'absolute'
      stat.domElement.style.right = '0px'
      stat.domElement.style.top = '0px'
      document.body.appendChild(stat.domElement)
    },
    draw() {
      this.stats.begin()
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 3, 0.1, 10)

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(400, 300)
      document.getElementById('three').append(renderer.domElement)

      var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
      })
      var geometry = new THREE.CubeGeometry(1, 2, 3)
      var mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // 设置相机位置
      camera.position.set(0, 0, 5)
      mesh.rotation.y = (mesh.rotation.y + 0.01) % (Math.PI * 2)
      renderer.render(scene, camera)

      this.stats.end()
    },*/
    init() {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 400 / 300, 1, 10)

      // const camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 20)

      // 坐标系
      const axes = new THREE.AxisHelper(1)

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(400, 300)
      document.getElementById('three').append(renderer.domElement)

      // 材质
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      })
      const material2 = new THREE.MeshBasicMaterial({
        color: 0x5c7b9a,
        wireframe: true,
      })
      const material3 = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: false,
        opacity: 0.25,
        transparent: true,
      })
      const material4 = new THREE.MeshLambertMaterial({
        color: 0xffff00,
        wireframe: true,
      })
      // phong 光照模型
      const material5 = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        specular: 0xff0000,
        shininess: 100,
      })
      // 法向材质
      const material6 = new THREE.MeshNormalMaterial()
      // 贴图
      // const texture = THREE.TextureLoader().load('/image/login/logo.png')
      // const material7 = new THREE.MeshLambertMaterial({
      //   map: texture,
      // })

      //正方体
      const geometry = new THREE.CubeGeometry(1, 2, 3)
      const cube = new THREE.Mesh(geometry, material5)
      scene.add(cube)

      // 长方体
      const geometry2 = new THREE.CubeGeometry(3, 2, 1, 3, 2, 2)
      const cube2 = new THREE.Mesh(geometry2, material2)
      // scene.add(axes, cube2)

      // 球体
      // THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength)
      const geometry3 = new THREE.SphereGeometry(
        5,
        80,
        80,
        0,
        Math.PI * 2,
        0,
        Math.PI * 2
      )
      const ball = new THREE.Mesh(geometry3, material6)
      // scene.add(ball)

      // 圆形
      // THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
      const geometry4 = new THREE.CircleGeometry(2, 4, 0, Math.PI / 2)
      const round = new THREE.Mesh(geometry4, material2)
      // scene.add(axes, round)

      // 圆柱
      // THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
      const geometry5 = new THREE.CylinderGeometry(2, 2, 4, 20, 3, true)
      const yuanzhu = new THREE.Mesh(geometry5, material2)
      // scene.add(axes, yuanzhu)

      // 圆环
      // THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
      const geometry6 = new THREE.TorusGeometry(2, 0.5, 20, 50, Math.PI * 2)
      const yuanhuan = new THREE.Mesh(geometry6, material2)
      // scene.add(yuanhuan)

      // 圆环结 
      // THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale)
      const geometry7 = new THREE.TorusKnotGeometry(2, 0.5, 20, 50)
      const yuanhuanjie = new THREE.Mesh(geometry7, material2)
      // scene.add(yuanhuanjie)

      // 文字
      // 文字形状（TextGeometry）可以用来创建三维的文字形状。

      // 自定义形状 
      // 自定义形状使用 THREE.Geometry() 是其他具象的父类
      // 初始化几何形状
      var geometry8 = new THREE.Geometry()

      // 设置顶点位置
      // 顶部4顶点
      geometry8.vertices.push(new THREE.Vector3(-1, 2, -1))
      geometry8.vertices.push(new THREE.Vector3(1, 2, -1))
      geometry8.vertices.push(new THREE.Vector3(1, 2, 1))
      geometry8.vertices.push(new THREE.Vector3(-1, 2, 1))
      // 底部4顶点
      geometry8.vertices.push(new THREE.Vector3(-2, 0, -2))
      geometry8.vertices.push(new THREE.Vector3(2, 0, -2))
      geometry8.vertices.push(new THREE.Vector3(2, 0, 2))
      geometry8.vertices.push(new THREE.Vector3(-2, 0, 2))

      // 设置顶点连接情况
      // 顶面
      geometry8.faces.push(new THREE.Face3(0, 1, 2, 3))
      // 底面
      geometry8.faces.push(new THREE.Face3(4, 5, 6, 7))
      // 四个侧面
      geometry8.faces.push(new THREE.Face3(0, 1, 5, 4))
      geometry8.faces.push(new THREE.Face3(1, 2, 6, 5))
      geometry8.faces.push(new THREE.Face3(2, 3, 7, 6))
      geometry8.faces.push(new THREE.Face3(3, 0, 4, 7))

      const tixing = new THREE.Mesh(geometry8, material3)
      // scene.add(axes, tixing)

      // ***************************************************************

      // var mesh = new THREE.Mesh(
      //   new THREE.CubeGeometry(1, 2, 3),
      //   new THREE.MeshLambertMaterial({
      //     color: 0xffff00,
      //   })
      // )
      // scene.add(axes,mesh)

      // 设置相机位置
      camera.position.set(5, 5, 5)
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      // 旋转
      const animate = function() {
        requestAnimationFrame(animate)
        cube.rotation.y += 0.01
        cube.rotation.x += 0.01
        renderer.render(scene, camera)
      }
      animate()
    }, /**/
  },
}
</script>

<style></style>
