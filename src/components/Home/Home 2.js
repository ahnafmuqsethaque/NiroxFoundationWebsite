import React, { Component } from "react";
import MemberInfo from "./MemberInfo"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "../styles/home.css";
//FOOTER NOT WORKING ON THIS PAGE FOR SOME REASON


export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: "slides",
    };

    return (
      <div class="Home">
        <MemberInfo />
        <h2>Events</h2>
        <Slider {...settings}>
          <div class="practice">
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mpCT2Ujjn8R2nnSTyIopkWktGGndRyAzbV2_dOxC2fHdsKTZ80iGEC-_OHeTc3peRY1EQLV8rrnRukMJNjYHVYt9tj3FgUmGLzjcJYl3zIJmWJvw9CQsOUgaQ_VTvtRp9Skje1P4GJB3xFkODK2JGgFd8xlro5EOws07yx8FyIUdpe4qtTP-TFWR_bVETEJIkKDLdIZd4xHQnNEcxVOk9og/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-141.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4m6laPccbyAyfaY-wKKBCZkrG2PI7EZ4dwNgW8EMmglwa9I2xL8ZMao5htOvQ7rSufpNZbFGBJwO4sEL5tr5hy22dW3VOlkkUsYZUaMkiHATbRWlfVBZNKwJ9Zx76mnQ59g9e2zuCwpayNQPC82Xt9IvF1QGQdXVpLaTScPGMMb8vDG07ioL7OJ719sn_T7G8cZeDcC3Ac5jO4rlEuEC4U5A/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-231.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mnk-Z4ABPrALKNMdkrFrfcYQ_nYY_eBsxjdk9V0Tof1vwFLTzTqrY691toGNIwG3kxKdKtzE-7BnEvMEBvKoJwWAKYYtmXajHFsWsAmbQNr_c2tqxGHvv-GUrff1feT03IrECmIT6L96Li6_rmNTUfK1YSW50-DYKCSpN5bx4bDaYHOp0WpkO3dxcJNNuFZM5w2TV4T3S6c9WH_-5ps2pXA/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-235.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4m4HwJ8Cpkojls_wv_jy-6Rtcf-x7Dgq8OkVlO3Hcueq3P74qqc1fUqsYnowWZ0l1AhFC7x6mQGMp9A6xYByf9bTd7o_o7u-jnvHPA_7uYrzr_q7K0cnxYYpJ0xl5Zt2_Aa50KQjyQQomxFKqQEaxVQV3ceKmubkNGXC-DfVPwgbJvS3BifaWhwQpWl4L9j-OYAQ5v0vm6OZcvXVAj7UZ1Zw/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-265.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mK1-c0I9xZq64_SP3GEtGf22JYXCu_UH7a22lQQ1GFZ35hdDUdtVlCIozeBoHX3PY6dEGl38wHYKV-Lto4gDVdxA3H8cj5f4JL6BuBdKWQux-3ZeFTXKr_d4BtsLM7n73LqEqnDvBTmuU4ZIzPn2u_QCAXIaJH7wa5e1Hs38I_Xc9ggZwL3i7HYejPqUS-K25X7VJR2SRI3oWpTCcpzKNcg/NIROX%20Residency.jpg?psid=1&width=1200&height=798"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm1files.storage.live.com/y4mILksQbtlAtJGJCMEDdrGdVgyX7jAvQ_VvSRpGk-vEZu1QZIIl-Hh7_JTuFSTE_Sm6uzEwmEM9hLeJD2Tng_Sg9GkY53nM_XPZLYQM7fDCK3SLQUvjrcwxhsPO_BGFuNMsOZX3BIG9UuW__Fu4jsysj6D6OWf6ehxSZUqBC8TvaKa0o-9BJyMF5HhheDr4vJGQFT1K6HaGOXRC454g-CSfw/DSC_0026.JPG?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mtjIpxShbVII78ZMhJsVZgt6603uJJwptWiGYu9QqzI17Z3sVasSZ9ipPwHlu6qPbhqoyWNyTq1grCHraW0wYa1k4If0f6KSXawUFzBrTcIOTA6wG8geSOJtJoqHpuf-kQYZHDrr4L9HFfHwF1KFbx1UQY5nSJPdiw14jqf6HtTjMnLkRV7uq75mrCtmMN8pEquO94bA_ImTY6yFb3h7jnw/Gordon%20Froud.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mj-aCJlKeD8LDUF_IscH563e2Lx536s_2wDCGvaaUJU1WU_bXddIWhdmoD-F50C0hyU5HXffpNYRAm7bA6O79rNDAEK3eXE1hNLBgUUE3zqPdViA8B_nDim56lmSddkQd87wOT8ke-AGHw6D4TFubXPHu7-Vs2i1NVIHlukA4Bii5sqFPwDbniR1OrFoWzY0MQzAxBzclBVWj1CQzni5SqQ/DSC_0122.JPG?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm2pap090files.storage.live.com/y4mUmtCnRqct6obuNfx8fjWGXs7o6_nfa9AVuPFhZd8bKARet8n3fB6pRzKG0YjwaWXoCuKEK16ETjKc0QZnj-PjVsRqrYIJVpCU5AbJbV8htDjnYUgAWYWGKmh5XsL4_25xHEzH3d1QzgL5Vp6Y0a_on9Ym8U8c5n55cHV0u02ZeG6H_2ZvdQCykbre-3lFXcnWOSlUhyao5Iei-vZ8kva_g/DSC_0100.jpg?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Slider>
        <h2>Projects</h2>
        <Slider {...settings}>
          <div class="card">
            <img
              src="https://dm2306files.storage.live.com/y4mrHgX_Y_3_GATZyT_wU6iR4h4lHb4pA9knLl0JxDoZ8AwcgXrewBaemHj9PR7cawrQVlUILC_vTgKR1J6EyZSWLWinmIvBjZj09i3dAZbbddK-J5Brcji0gL98DfRZCWAI8OOpcZpL9pnLhAxfEcSQQcQvSlOMFemUlpAYeJ3NRRB1fs09RCR2RpxvYMAiZPuZCyHTmRw29e7ha_33d1ZvA/DSC_0098.jpg?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm2pap090files.storage.live.com/y4mgpVN04h1xSZDtU82kV96cCAVO6RCvXiKNS6KwO2-rjNF1t2Z9BASxa0QACt7CXK_L1IHMVNbKQ3CpEpXjoynrMkmO-ZNXeu34fql3fWhgwazJmb8srVkcZwVZqtjH0i1Y9KtVjq0W5OZ5MFRw5s3SNMYWsdoGMjBbGc49XgTaCUil2kldibWzB8pY-J40YwYbazOX8VSMccmLEoE5Rz5jw/19%20APIT16%20Raimi%20Gbadamosi%20The%20Republic%20Faces%20the%20Sun%20V.JPG?psid=1&width=1797&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm2pap001files.storage.live.com/y4mNEcoaeldDWt4R9G_fowcZPMt0JCIJSdbpFvr_0fv-aZA5Yfen84yehvAadLIJg-5T5HENhYHflo2xezrVYybpsBI_N6AwkUbmhKqQEfcG3IxFOruMCAc1Ph7zB3mBtt1WM_yWuS-CeWwfCt2R71f8ECyRk_-dirYsmgN9NkSMWc1R0ZpFSZ7h7H3rEEjwzXV4t-i2RRMG2wbhzCEAjldLg/Joni%20Brenner%20-%20NIROX%20Sculpture%20Park.jpg?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm2301files.storage.live.com/y4mS7V1FVdLMGlHERQ7CfsvXFGm7SaHswJHG-aLD03WaP4MWEZkrZ-4KIU7wJ0_3NEOu3UDnnYXFwkraPogHBJO-0Y1grZJewzYDe-SypyVOByOUt1KnWKv8GXlO7BfHkFfuIJEsbklWL5dUdqQ2QFd2KLtu8rlulzqDVgmcdLTbQ4oOR-XLZ7rPI_yOwLPHzxqcS91HLXVkMClPDxycbaqHw/IMG_5393.JPG?psid=1&width=1608&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm2302files.storage.live.com/y4mcVToVFPkfV0KMXClDqQ9PgX_PZFBUswhP2_FtLp8JKRLPA4jh_IxVbLkZRKPbilR-SzDgYCYMsxJxbV0LL7HV3f4KRCOvOq36wwQyHSo8xDTXQkiYRUcKz6xtsp3mMvvPoOHPWVlgjIgH7-LPOw75Zy4VQYL1Dc0Ote64tVFTqnik__8pSu6h2tmt_EmyG81Az7DHVLpjjSpFD4crSEtNA/IMG_5512.JPG?psid=1&width=1608&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4m9nGQLU9P3s7C6-mtymqGiZHJBA8D0pgcTh3O2pNu3c3pSKE6BeQ2L8e7TcR2Z36dHvGsPaG1VOFV920ZxrGCH8CIhSf_0pblMZGIn4GywEnkFNwws4A-QoR_9DYGeqnuxKKZITFw9gLAQXNQe6S4pjYXFWokHOE53eMYAcof012wZGkyvr_2lZy61vkadZWKAOVbiq4oqo0qS4Z6cb0v5A/Mozart_s%20Opera%202017-124.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mkqerkf3YGB6L6VLzHyoyIAMXXW6gCvUCHjjkukzd3rXB2XJZVIhvfQD2T6OxxuqsuyfPnDm8S_DL9icPUI9x_hmN1JzuDQCE9NzQSb7yrGbOqqq5M9THTzJxZViHaXDM2MliSwFEYN8VfgY7viTVoXxHE_wjROtPGvQLb0jbYEBAPoJJo53SHVbL5QyFHtEQ5BapR4lTfuOC7LHQtbWy1w/NIROX%20Open%20days.jpg?psid=1&width=1810&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mIQrAC4sGkFbFMff6yi7wM-wxF7P6IuHbPsTntnCNdCEi6AxKps0iiend9W8zUoEIcp9bdQjVj4viDvX5sDH7_oMBiMW4dsg4r5Te8xO-fquudMb1MCEaxoac0llNOYjtMI79rbmRmaBHihZUc9ENjLxkRluGF3chgCQDM5O4DnqS3dUIL6ZJmqU5mGz-q05XBubKfsE-EVQJGTYWkVNhSQ/Niroxunedited_11.jpg?psid=1&width=2012&height=1130"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4m6kbYUWkg4db_e6ZqUQrPL7Kbxpa-cgwu0kdJ9W3De1h-mFz0mAY9M09AvFMT4vf5rrTum-H-xnvKd5njWjuRHyu2bAGnImgpptAEu48SKRzR0DPeEdch633rgG7FwnbCdwiSN80oGzu4kimi7St8UF7p2H5MyOVEGv1OeMp2HpkY4emMDapCJf6R8MAeZByb7iHuy31FYzyMKNS1CfWfjQ/Amphitheatre%201.jpg?psid=1&width=1600&height=900"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
