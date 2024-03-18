import React, { Component } from "react";
import PropTypes from "prop-types";
import InputStyled from "../Shared/InputStyled";
import Data from "../../staticData/Data.json";
import Image from "next/image";
import "./cLientSelector.css";

export default class ClientSelector extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <div className="mtb">
          <span>Testing center 1</span>{" "}
          <span className="mlr1em w50">
            <InputStyled
              options={Data.options}
              placeholder={Data["client input"]}
            />
          </span>
          <Image
            height="20"
            width="20"
            alt="seperator"
            src={"./wait Icon.svg"}
          />
        </div>
        <div className="mtb">
          <span>Testing center 2</span>{" "}
          <span className=" mlr1em w50">
            <InputStyled
              options={Data.options}
              placeholder={Data["client input"]}
            />
          </span>
          <Image
            height="20"
            width="20"
            alt="seperator"
            src={"./wait Icon.svg"}
          />
        </div>
        <div className="mtb">
          <span>Testing center 3</span>{" "}
          <span className="mlr1em w50">
            <InputStyled
              options={Data.options}
              placeholder={Data["client input"]}
            />
          </span>
          <Image
            height="20"
            width="20"
            alt="seperator"
            src={"./wait Icon.svg"}
          />
        </div>
        <div className='mtb'>
          <span>Testing center 4</span>{" "}
          <span className=" mlr1em w50">
            <InputStyled
              options={Data.options}
              placeholder={Data["client input"]}
            />
          </span>
          <Image
            height="20"
            width="20"
            alt="seperator"
            src={"./wait Icon.svg"}
          />
        </div>
      </div>
    );
  }
}
