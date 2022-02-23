import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Style/Slider.css'

export function Slider(props) {

    function listImage() {
        return <>
            <div className='slider'>  
                {props.elements.map((image) => (
                    
                    <Carousel className='carousel'>
                    
                        <div>
                           {image.Imagem_1 &&

                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_1.data)))} />
                            }
                       </div>

                        <div>
                            {image.Imagem_2 &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_2.data)))} />
                            }
                        </div>
                        <div>
                            {image.Imagem_3 &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_3.data)))} />
                            }
                        </div>
                        <div>
                            {image.Imagem_4 &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_4.data)))} />
                            }
                        </div>
                        <div>
                            {image.Imagem_5 &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_5.data)))} />
                            }
                        </div>

                        <div>
                          {image.Imagem_6  &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_6.data)))} />
                          }
                        </div>
                        

                        <div>
                            {image.Imagem_7 !== null &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_7.data)))} />
                            }
                        </div>
                        <div>
                            {image.Imagem_8 !== null &&
                                <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(image.Imagem_8.data)))} />
                            }
                        </div>
                    </Carousel>
                ))
                }
            </div>
        </>
    }

    return (
        <div>
               {listImage()}
                      
        </div>
    )
}