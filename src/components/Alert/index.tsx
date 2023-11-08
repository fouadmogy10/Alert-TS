import "./Alert.scss"
import { ReactNode } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
export interface IAppProps {
  type:string,
  title:string,
  icon:ReactNode,
  desc:string,
}

export default function App(props:IAppProps) {
  return (
    <div className={props.type}>
      <div className="alert-header">
        <div className="alert-title">
            {props.icon}
          <span>{props.title}</span>
        </div>
        <AiOutlineCloseCircle />
      </div>
      <p>
       {props.desc}
      </p>
    </div>
  );
}
