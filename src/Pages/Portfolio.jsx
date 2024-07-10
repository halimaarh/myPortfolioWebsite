import web from "../Assets/designing.png";
import java from "../Assets/java.png";
import mongo from "../Assets/mongo.png"
import weather from "../Assets/weather.png";
import Layoutone from "../Layout/Layoutone";


function Portfolio() {
    return (
        <div>
            <Layoutone/>
            <div className='portfolio'>
                    <div className='my-heading'>
                        <h1>Featured Portfolio</h1> 
                    </div>
                    
                    <div class="row"> 
                        <div class="column"> 
                            <div class="my-card"> 
                                <div class="image"> 
                                    <img src={web} alt="Web Design Image"/>
                                </div> 
                                <h3 class="greet-heading">Web Design</h3> 
                                <p class="paragraph ">Designing</p> 
                            </div> 
                        </div>

                        <div class="column"> 
                            <div class="my-card"> 
                                <div class="image"> 
                                    <img src={java} alt=" Chat-App Image"/>
                                </div> 
                                <h3 class="greet-heading "> java project </h3> 
                                <p class="paragraph ">Chat-App</p> 
                            </div> 
                        </div> 
                    </div>

                    <div class="row"> 
                        <div class="column"> 
                            <div class="my-card"> 
                                <div class="image"> 
                                    <img src={mongo} alt="Database Image"/>
                                </div> 
                                <h3 class="greet-heading"> MongoDB</h3> 
                                <p class="paragraph ">Databases</p> 
                            </div> 
                        </div>

                        <div class="column"> 
                            <div class="my-card"> 
                                <div class="image"> 
                                    <img src={weather} alt=" Weather-App Image"/>
                                </div> 
                                <h3 class="greet-heading "> Html, Css & javascript</h3> 
                                <p class="paragraph ">Weather-App </p> 
                            </div> 
                        </div> 
                    </div>
                </div>
        </div>
    )
  }
  
  export default Portfolio;