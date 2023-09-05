import React from 'react'
import './github.css'

const Github = () => {
  return (
    <section id='github'>
      <h2>Github</h2>

      <div className='container github_container'>
      <div className='github_item'>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=taniya635&theme=cobalt&border_radius=5.5&date_format=M%20j%5B%2C%20Y%5D" alt="" />
      </div>
      <div  className='github_item'>
        <img src="https://github-readme-stats.vercel.app/api?username=taniya635&show_icons=true&theme=cobalt" alt="" />
      </div>

      <div  className='github_item'>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=taniya635&layout=compact&theme=cobalt" alt="" />
      </div>

      <div  className='github_item' >
        <img src="https://ghchart.rshah.org/taniya635" alt=""  />
      </div>
      </div>
    </section>
  )
}

export default Github