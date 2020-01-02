import React from 'react';

const Likes = function(){
    return(
        <div className="likes">
                <div className="likes__field">
                    <svg className="likes__icon">
                        <use href="img/icons.svg#icon-heart"></use>
                    </svg>
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">   
                        {/* <li>
                            <a class="likes__link" href="#23456">
                                <figure class="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">Pasta with Tomato ...</h4>
                                    <p class="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li> */}
                        
                    </ul>
                </div>
            </div>

    )
}
export default Likes