import { useState } from "react";
import "./Tabs.css";
import {Container2} from './Tabs.element'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    
    <Container2>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Education
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Work
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
          <div className="Skill_content">
            
            {/* Edu. data 1 */}


          <div className="skill_data">
              <div>
                <h3 className="Skill_title">BSc. in Management Information System(Special)</h3>
                <span className="Skill_subtitle">NSBM Green University</span>
                
                <div className="Skill_calender">
                  
                  2019 - Present
                </div>

              </div>
              
              <div>
                <span className="Skill_rounder"></span>
                <span className="Skill_line"></span>
                
              </div>


            </div>

 {/* Edu. data 2 */}
            <div className="skill_data" id="abc">
              <div></div>

              <div>
                <span className="Skill_rounder"></span>
                <span className="Skill_line"></span>
                
              </div>


              <div>
                <h3 className="Skill_title">G.C.E. A/L (2017)</h3>
                <span className="Skill_subtitle">Gothami Balika Vidyalaya, Colombo 10</span>
                
                <div className="Skill_calender">
                  
                  2015-2017
                </div>

              </div>
              
            </div>
 {/* Edu. data 3 */}

            <div className="skill_data"  id="abcde">
             


              <div>
                <h3 className="Skill_title">G.C.E. O/L (2013)</h3>
                <span className="Skill_subtitle">Ananda Balika Vidyalaya, Kotte</span>
                
                <div className="Skill_calender">
                 
                  2003 - 2015
                </div>

              </div>
              
              <div>
                <span className="Skill_rounder"></span>
               
                
              </div>


            </div>




            
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="Skill_content">
            
            {/* Edu. data 1 */}


          <div className="skill_data"  id="abcd">
              <div>
                <h3 className="Skill_title">Axiata Digital Labs</h3>
                <span className="Skill_subtitle">Intern</span>
                
                <div className="Skill_calender">
                                   2021 - Present 
                </div>

              </div>
              
              <div>
                <span className="Skill_rounder"></span>
                <span className="Skill_line"></span>
                
              </div>


            </div>

 {/* Edu. data 2 */}
            <div className="skill_data"  id="abcg">
              <div></div>

              <div>
                <span className="Skill_rounder"></span>
                <span className="Skill_line"></span>
                
              </div>


              <div>
                <h3 className="Skill_title">Union Assuarance PLC</h3>
                <span className="Skill_subtitle">OutSource- Data Entry Operator</span>
                
                <div className="Skill_calender">
                 
                 2018
                </div>

              </div>
              
            </div>
 {/* Edu. data 3 */}

            <div className="skill_data"   id="abcde">
             


              <div>
                <h3 className="Skill_title">Hatton National Bank PLC</h3>
                <span className="Skill_subtitle">Intern at Personal Financial Services Division</span>
                
                <div className="Skill_calender">
                 
                  2018
                </div>

              </div>
              
              <div>
                <span className="Skill_rounder"></span>
               
                
              </div>


            </div>




            
          </div>
        </div>

       
      </div>
    </Container2>
  );
}

export default Tabs;