import React from 'react';

function Banner(props) {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="First slide"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Banner;