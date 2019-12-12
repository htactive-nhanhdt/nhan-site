import React, { useState } from "react"

import TextCenter from "../TextCenter/TextCenter"
const Home3rd = ({ data, language }) => {
  const [toggleStatus, setToggleStatus] = useState(1)
  const toggleTab = status => {
    toggleStatus !== status ? setToggleStatus(status) : setToggleStatus(1)
  }
  const resetAnimation = () => {
    const element = document.getElementById("tab-pane")
    element.classList.remove("fade-in--quick")
    void element.offsetWidth
    element.classList.add("fade-in--quick")
  }
  const dataUse = data.frontmatter[`home_3rd_${language}`] || {}
  const dataArr = Object.values(dataUse).map(item => item) || []
  const dataTab = dataArr.filter((item, index) => index >= 2)
  const tabSelect =
    toggleStatus !== 0
      ? dataTab[toggleStatus - 1]
      : dataTab[0] || { [`tab_title_${language}`]: "Hello" }

  return (
    <div className="container">
      <TextCenter head={dataArr[1]} description={dataArr[0]} />
      <div className="vertical hc-tabs col-md-12">
        <div className="arrow hidden-sm hidden-xs">
          <i className="fa fa-caret-up" />
        </div>
        <ol className="nav nav-tabs" role="tablist">
          {dataTab.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                toggleTab(index + 1)
                resetAnimation()
              }}
              className={toggleStatus === index + 1 ? "active " : ""}
            >
              <a role="tab" data-toggle="tab">
                {item[`tab_title_${language}_${index + 1}`]}
              </a>
            </li>
          ))}
        </ol>
        <div className="tab-content tab-custom">
          <div
            className="tab-pane fade in active fade-in--quick "
            id="tab-pane"
          >
            <h1 className="text-center title">
              {tabSelect[`tab_title_${language}_${toggleStatus}`] || null}
            </h1>
            <div className="row">
              <div className="col-md-12">
                <p>
                  {tabSelect[`tab_desc_${language}_${toggleStatus}`] || null}
                </p>
                <img
                  src={tabSelect[`tab_img_${language}_${toggleStatus}`] || null}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home3rd
