import PropTypes from "prop-types";


const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href){
    return (
        <a
        target={target} 
        href={href}
        className={"btn btn-primary " + classes}
        >
        {label}

        {icon ? 
        <span className="material-symbols-outlined" aria-hidden="true" >
            {icon}
        </span>
        : undefined    
    }

        </a>
    )
   
    }else {
      return (
        <button className={"btn btn-primary " + classes}>
        {label}

        {icon ? 
        <span className="material-symbols-outlined" aria-hidden="true" >
            {icon}
        </span>
        : undefined    
    }</button>
      )

    }
}

ButtonPrimary.PropTypes = {
    label : PropTypes.string.isRequired,
    target:  PropTypes.string,
    href : PropTypes.string,
    icon : PropTypes.string,
    classess : PropTypes.string

}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href){
    return (
        <a
        target={target} 
        href={href}
        className={"btn btn-outline " + classes}
        >
        {label}

        {icon ? 
        <span className="material-symbols-outlined" aria-hidden="true" >
            {icon}
        </span>
        : undefined    
    }

        </a>
    )
   
    }else {
      return (
        <button className={"btn btn-outline " + classes}>
        {label}

        {icon ? 
        <span className="material-symbols-outlined" aria-hidden="true" >
            {icon}
        </span>
        : undefined    
    }</button>
      )

    }
}

ButtonOutline.PropTypes = {
    label : PropTypes.string.isRequired,
    target:  PropTypes.string,
    href : PropTypes.string,
    icon : PropTypes.string,
    classess : PropTypes.string

}
export {ButtonPrimary, ButtonOutline} ;