const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

ctx.fillStyle = '#d30f0e'
ctx.fillRect(30,30,410,190)
ctx.strokeStyle = 'rgba(0,0,0,.5)'
ctx.lineWidth = 5
ctx.strokeRect(130,50,200,150)