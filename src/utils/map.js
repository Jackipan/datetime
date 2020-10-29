export function MP() {
  return new Promise(function(resolve, reject) {
    window.init = function() {
      resolve(BMap)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '/js/api.map.baidu.com.js'
    script.onerror = reject
    document.head.appendChild(script)
  })


  // var script = document.createElement('script')
  // script.type = 'text/javascript'
  // script.src = '/js/api.map.baidu.com.js'
  // return document.head.appendChild(script)
}
