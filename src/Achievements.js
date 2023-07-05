import * as React from 'react';
import './Achievements.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function Achievements(){
    return (
        <div>
            <NavBar />
            <div className="achievementsDiv">
                <div className="achievementRow">
                    <div  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500" className="achievementRowPart">
                        <div className="achievementPhoto">
                            <img className='imgSchool' src="https://upload.wikimedia.org/wikipedia/en/0/04/Dharmasoka_College_%28crest%29.png" alt="" />
                        </div>
                        <div className="achievementDetail">
                            <p>Student from Dharmasoka College Ambalangoda. Passed GCE Scholership Exam , Got 8A s and B for O/L, Got 2A's and One B for A/Ls in Physical Science Stream. I got many skiils form my school life</p>
                        </div>
                    </div>
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                </div>
                <div className="achievementRow">
                    <div className="achievementRowPart">
                        <div className="achievementPhoto">
                        </div>
                        <div className="achievementDetail"></div>
                    </div>
                    <div  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500" className="achievementRowPart">
                        <div className="achievementPhoto">
                            <img className='imgIJSE' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABQVBMVEX////uHCX9///5///6/f/yGiH8/PztHSXwGyQAAAD+/vv///74+PjwzsvrAAz//f/o1djlAAX0FifjSlH8+vLqGR7deHnz8/PiABfzGyLhGyfs7Ozyur788e/u1NThABHpur6MjIx0dHTi4uLywcHjGB7R0dHExMThQU2jo6OxsbGXl5fb2drpHyHrHijjOkqdnZ0pKSlnZ2caGho2NjaEhIRjY2O6urpwcHBCQkJQTk/fj4vy5eTjMj/eJTD3GB1XV1f7zs7vzdLm2dLNAADosrzso6ThvbXXUFvTEBrjp6f21N7hgYnERkvGTWDfrqbEW2bZZXD/39nNHSvhiYPr6N7QgYb/9P/mj5/JbYDXo6fZmJ7tFjTFJzPTXV/Vb23nKj7wAADXQTrMOknry7zpgYfTNEbXnpbXkJTcenTea3gTAWZuAAAMlUlEQVR4nO2ZC3faOBbHhYWFMcaeEFwDDiFAgGIeBcI7JE7TbppkO9tO0plOp9Nm+5jZ7nz/D7BXMg9DkuJku2dnz95fT2MidCX9daWrK4cQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBFlBWnAfmzvZ/XeQbvh0B6PVL4JwX9Pg4/s/IiZZj7d9xC263oZI2Xh8bnK8fWzD9DMqGYRk47uCra+xs3WsQSsCZoAd+CY7ebIdf8wtb7GF4t3dCVWTx8dJStVYUIXMePI0teDXjb+st1ENKf60lIlMbeSUfkJomL6m6rPTDPzu5lJL5IDpkz/OcvrTc2bMFFJDon99fpAppfRSSpZnBstMS7+f0MnfXrx4+ThG1aAKqRHXG41Iw/RobOys96FKpN2nZkOZ2ZS4QoOGkz9suG6Do8hKWuakvQd8WDwTemgrRo3ZFFN68T7n5kxobmoKVumFhfigKNCgu5ml6svz518uXmpG4C1JpSd6E4h4NPWt9TaqJG3prpIICSKhpgwKJSN55WYyTRhdOgQjhW+UKSHvcwjaDykhxb3coTQ8G6IU273UoXYzEgolEgkFTCO8VR/ebxl5c0K17JsXr/748Sf79XpHTAfLpO0NJTQnogfwIWy63ZzChyRIN9wTIjHjmdsAcU2hQ1ESicUopzPIKzfSocwWLEwW4wrB8/TZoZxIRCJ8Kng1xQXD+YzPSDRk92ASZuHXL89/fpP9KcvuoPC7jYXAkKLvBHA/V5huzCZFEQoN470Z8bWUaXKXLMHbd93Ms/kKhYbo9qFbCvlpmGklsmoru+7DC4gvVPrl6mL3+dssDbpK/w2FMzlc4T4onPza8A/UNXOljEdpCrgyc/jumWEYMwcYNPteN2frXbTWaKRzGzPLOYeH319Qw1ANapy8efMWgqnx1RF+c4VfIAGIl1y/D5unx1byGlkrCyvTmA3PoLsbpiL7pkZxN652Jpp23TIMW53bJg2Nvg4HjjT3UgjnHuzDucJQQ96PQfBJKT6FytlFgIBOySfX13tENvWH2wGHHpBvqTCXbvoVJsPhdQ0xenGW9vtdNk+zlAY+zIPwrRTCwo0vKQzlHq9viEnnri+Qgw8Pj2GH/ecVSswHbO9rkdmQblA4ych+he7p9iR7C5AySEYsRiXpgeu3UXIPKFPVMJlcTKbYtrCY0KCnQxCFKvnloY9PH0+zKluyWo00XKHKTpdHK5c+HtzC5vvzLKExiBwPS2nf5jWhdwOSnK13l4cL/n5wePg++zpo8AygkNEvH8w5upk7CKRQeqHLvpZCaRcOMYG8aG2aiOn6u3M47lX6qOFfpQ1zmxph+rkpu9PKPH1ruPpH8OE9nXijD+lbfZGPKAnlUTa2XqHE1CvZN1yFZzIei8zGS23g0XBz+yqM+pHpnxSltA1ljzMm5ABz62ZJ/pRl7Bv6EIL8z7qyoGkeZGNLzUtL+5Avrv0YrDma/CMFmXfIy0R5kjZtIe3Bs7KEl6cqsHf1F3AcPlrau4lS3KAXh+lIuimsRTORD58mkOZJ38iHIe5D6Yvu08wVkiWF4RWFin4CCuESpO5eHTRzOV2f3nk2ltFd03e2w8EQpqf+4zCUzp3TH999WL44bfz+OHCKdk+FjYPJNYVbKdmnMHeu8rhhhIk6gUv0bewf+sNKIxGn5Lns37um+16dxB+vmN0/jt6qkJ4v+/DXyfIqBSVvU4vBKkpqV+XHtKSGVRrmr1NgN11/x0LpvunbdhH5hNLd1FJ0MkO7UG/VMPh9PoBCHmkk49mHSFOZj1/RzyEbDIfDhoAZajh5dabMnBhpmvK2xEORBCMxWJjyM00VMwFuncJPVrql+0JRIrdPafZMTzRDs9JEyPwYp7wfcSR7ZuJMFh3zD3cWe/N5uL0BV9GFi8xPPFgvkOjnUiQx24iRkPsoKc2CLdxwVDrTtWQF3j1JmX6FJ5C2vdIzzeZsdyqhpnL5jNc16C0Yd12xNymEc+oylI7MBSgR9+O5L0GZPHlektMLb5j6P2bN8aU4y0ey4oePye4715eFKhu7YUYnlwkl7b89yfrp+TZcQW5kMgn+9mKuMHaDQvpbaT4UOBFDcHrlUilxx+MvhPSc3JjedvkbBoi1s20KE7xz6AVO39sozw4e7jwAK3ARbE7CqqGepxqNhHe48B+JhOnqU+PSCqnc5YvA98K5wnDsu9yKQnAFXLz9dz1vsSr+9y4zmg35bFd0C5c+SMNenJmignITC0/B0aj/IFYcewApT7N5a2ceMM/phr4ZV7+RQkJ/zplKKACNtFzaogbfhfw8pCcZeXVqbqRZclOfKV9yTPtNd9caNSC10q+ylAV+P7NGYZg+z5m3duejlPo9DgJFtxBK/5EyZf5SaZ2ZAof7T6q4IhuSen6Zcle9uIKZbp7tJyFYGXf2oUS3N9wFur4DpTEIZVuHkJqYXwWqH+4n+dtuQ9ioX3RTl+fp9SoimTbFU9afvkoaQqEEp8jFqwz4UV5t32ebcy9hqRhMku6cnqrhydWDBf/847tZsNJ2fjvdBOAC9WgZKOFfbJ7uf04uNgYz3v6+GZDTL8f+oAjnYnz//SZv2N+X7751eHpx7wuisZQTUTL9VaKvRWJym50EF1gKtRbvzeAcXK2//Ccj8ZRE27wbX1U4yqEgtnqaw9HqoWWzvMr9oAz++Q9UJsYAuUmSJy+QVfAsauXkBkSKI8HOnyd0YUnj53T46/Bpgx+G4b+PQaEK+QpdyRLC8zyKZ0qB/1CxAvjCiC2Az55C/hcm72+EsWtzG/OKYmAL/+dvBkngDBnMlp3N9/GN+dhsXBK5rwsR5H8CBnuerRZq1lo72+bGxNJEC15TUHitqeu93dTYbWbMWtPgehipFHrl1dJWZ51d1Wk7YN3K52vOvLBS7Re+bqYNCvlWq+cslxajt81oua2tG0kAOj3/b4w44Blw0GBeVLGv2dQ7pFgBnXlCnPy8dI9Yg8G1usvsQQWrulzGirf6sLimuUAM81wX49PIV1mF+88ixfZs8dpjrhAG4QX0Iq84GHqmMDmaI5YnN4rCbHAn8uxRLH5NDFDT4Jfi1BntARF9WUTMm+XVgP6ZGIFXTwgTBbBKmdg0bN7C3SnkibPndPbKxHGqHaswqhZhsdWi1cpRlVTbpLpXq9s9ZyTWst0b9FukPBy3+AAr0Y5NoOOekx8ym5sMx9VBdFAcF6ziUXHQG3St8qjXHWp5Z1TxFMLDYXZ/mB8NDVKtOeNhMd8lg3Z1uFfhzY8GpFxzunal3YpWe+PZ2Kx+ediv3VshgcZbBdK1iUMqfVh9BdgbMPAasaPEblvkyNbyI+7TDuiMlqc+ZLBPonlY19BzX9QVX/QHZNAndpUclQnoAkdbvbLmREVv3U6+cAQix8Tas7SoRvoOsfcYAWHVISnUteqe1rG1YYeMHI3VuwYfW75H8i1S794z7HCF7SJxCqQarVk3KbShl0GlDO3be0UhZrpKoaQVHZKxI4Y8U1gZQ6nlQM1yqwsK4duRU6ksfDiASRkSq21rUZt0uMIYGdWJA6oGlUq5PobKZV4ComD2bdLqcZHF+4YdobDOFbLyeKTdqBBGwrcEbDXottCaKYShwkq1xhA5uNc8hUzrVga9Gvg1XyVjUFglrFvnRwJ3AexD2GDMU0iqvUpP83woFHZhWqx6m8/likJrVMlX7idQRJo94UMY1KhYOWKWp9CCeRuAwj3bOuoXiy0+QB5boOupwjys2WKXOW346IhIM+hYFsmPrHq0AsvQ1roD4cPeuGjnRejiPiQtC9RYsPqH9brGVwaZKiyMi8WaNurZ9apQWJwrrEAwuKfAyrhfL4+qdq9vd2qwo4qjvNXrF8l4aNfbnUF7wDr9oj2OHokO7D4/AO3CuMI90irUqkNQ2RtWa0yrdgdWsQv7sg5zdgSVe91qYVjvF2yIE9Exj4/aYDSs1Qp5rXdUrHQdMh51233mdCv1UcuGMq9evbvX0cowDtIalcvdql3o2JW9brd7LycyS+OIn4yfgxC6eRnEeBHnRSAXC8s7PRj4CMo1seY0ODnF91DIGLTCuDWP/PwA4EeCxkt5G5Y2683rUDyKVUMzqnVtOgh+rIh63jnBB8Km1VmNW+a/IuTPSa1ft8r5IBHSjg5su3ot+frz4wyHDrueF99AsdfJf5MEB0EQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQu/EvD66+CI0oopgAAAAASUVORK5CYII=" alt="" />
                        </div>
                        <div className="achievementDetail">
                            <p>Completed "Comprehensive Master Java Developer" diploma and got quallified to do Oracal's Java exams, and got web development skills there. Learned HTML, CSS, JS, Jquery, Bootstrap, Angular, Node.js ,MongoDB, SpringBoot and lot more. Completed Final Project also</p>
                        </div>
                    </div>
                </div>
                <div  data-aos="zoom-in-up" data-aos-easing="linear"data-aos-duration="1500" className="achievementRow">
                    <div className="achievementRowPart">
                        <div className="achievementPhoto">
                            <img className='imgUCSC' src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className="achievementDetail">
                            <p>Currently studying "University of Colombo School of Computing - Computer Science" and willing to do Masters here</p>
                        </div>
                    </div>
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                </div>
                <div className="achievementRow">
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                    <div  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500" className="achievementRowPart">
                        <div className="achievementPhoto">
                            <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/coursera-vector-logo-2022.png" alt="" />
                        </div>
                        <div className="achievementDetail">
                            <p>Have done plenty of recognized Coursera Certificates please check my LinkedIn profile <a href="https://www.linkedin.com/in/w-h-kasun-udara-5647a4218/details/certifications/"><b>Click Here</b></a></p>
                        </div>
                    </div>
                </div>
                <div  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500" className="achievementRow">
                    <div className="achievementRowPart">
                        <div className="achievementPhoto">
                            <img className='imgHacakthon' src="https://us.v-cdn.net/6036147/uploads/368UTZVITVZA/l-03-8-4-1200x675.jpg" alt="" />
                        </div>
                        <div className="achievementDetail">
                            <p>Got Participated to plenty of Hackathons and got the chance for the final round. "Sliit Codefest ,Sliit Codefest Algothon , IIT's Openhack , UCSC's Freshhack, UCSC's 8 Weeks of Code, UCSC's Madhack and lot more...." </p>
                        </div>
                    </div>
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                </div>
                <div className="achievementRow">
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                    <div  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500" className="achievementRowPart">
                        <div className="achievementPhoto">
                            <img className='imgInternships' src="https://portal.ct.gov/-/media/SOTS/Logos/Internship_Logo.jpg?sc_lang=en&h=225&w=400&hash=188FD7265BEFF65B439A585D112F86DC" alt="" />
                        </div>
                        <div className="achievementDetail">
                            <p>Open for Internship Opportunities and excited to work for the company at my best.</p>
                        </div>
                    </div>
                </div>
                <div className="achievementRow">
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                    <div className="achievementRowPart">
                        <div className="achievementPhoto"></div>
                        <div className="achievementDetail"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Achievements;