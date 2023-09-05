import React from 'react'
import './skills.css';
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3,DiMongodb,DiJavascript} from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {IoLogoNodejs} from 'react-icons/io'
import {TbBrandMysql,TbBrandPython,TbBrandTypescript} from 'react-icons/tb'
import {BsGithub} from 'react-icons/bs'
import {SiNetlify,SiChakraui,SiVercel} from 'react-icons/si'
import {VscJson} from 'react-icons/vsc'


export const Skills = () => {
  return (
    <section id='skills'>
      <h2>What skills I have?</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
            <h2>Technical Skills</h2>
            <div className='experience_content'>
              <article className='experience_details'>
                <AiFillHtml5 className='icons'/>
                <div>
                <h3>HTML</h3>
                </div>
              </article>
              <article className='experience_details'>
                <DiCss3 className='icons'/>
                <div>
                <h3>CSS</h3>
                </div>
              </article>
              <article className='experience_details'>
                <DiJavascript className='icons'/>
                <div>
                <h3>JavaScript</h3>
                </div>
              </article>
              <article className='experience_details'>
                <RiReactjsLine className='icons'/>
                <div>
                <h3>React </h3>
                </div>
              </article>
              <article className='experience_details'>
                <RiReactjsLine className='icons'/>
                <div>
                <h3>React Redux</h3>
                </div>
              </article>
              <article className='experience_details'>
                <SiChakraui className='icons'/>
                <div>
                <h3>Chakra UI</h3>
                </div>
              </article>
              <article className='experience_details'>
                <TbBrandMysql className='icons'/>
                <div>
                <h3>MySQL</h3>
                </div>
              </article>
              <article className='experience_details'>
                <TbBrandPython className='icons'/>
                <div>
                <h3>Python</h3>
                </div>
              </article>
              <article className='experience_details'>
                <TbBrandTypescript className='icons'/>
                <div>
                <h3>TypeScript</h3>
                </div>
              </article>
              <article className='experience_details'>
                <VscJson className='icons'/>
                <div>
                <h3>JSON server</h3>
                </div>
              </article>
              <article className='experience_details'>
                <BsGithub className='icons'/>
                <div>
                <h3>GitHub</h3>
                </div>
              </article>
              <article className='experience_details'>
                <SiNetlify className='icons'/>
                <div>
                <h3>Netlify</h3>
                </div>
              </article>
              <article className='experience_details'>
                <SiVercel className='icons'/>
                <div>
                <h3>Vercel</h3>
                </div>
              </article>
              
            </div>
        </div>
        <div className='experience_backend'>
          <h2>Soft Skills</h2>
          <div className='experience_det'>

          <article className='experience_details'>
                <div>
                <h3>Collaboration</h3>
                </div>
          </article>

          <article className='experience_details'>
                {/* <div> */}
                <h3>  Attention to detail</h3>
                {/* </div> */}
          </article>

          <article className='experience_details'>
                {/* <div> */}
                <h3>Adaptability</h3>
                {/* </div> */}
          </article>

          <article className='experience_details'>
                {/* <div> */}
                <h3>Feedback Receptivity</h3>
                {/* </div> */}
          </article>

          <article className='experience_details'>
                {/* <div> */}
                <h3>Creativity</h3>
                {/* </div> */}
          </article>
          
          <article className='experience_details'>
                {/* <div> */}
                <h3>Problem solving</h3>
                {/* </div> */}
          </article>

             
              
              
            </div>

        </div>

        {/* <div className='experience_tools'>
          <h2>Tools</h2>
          <div className='experience_content'>
              
              
            </div>

        </div> */}

      </div>
    </section>
  )
}
