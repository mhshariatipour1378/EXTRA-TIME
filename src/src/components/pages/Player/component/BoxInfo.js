import React from 'react'

const BoxInfo = (props) =>{

    var theme = props.theme != null ? "brown" : "";

    console.log(props);
    return(
        <div className={`box-info ${theme}`}>
            <h2 className="box-title font-title">
                {props.title}
            </h2>

            <div className="box-items">
                {
                    props.items.item.map( (item)=>(
                            <div className="b-item">
                                <div className="value">{parseInt(item.value)}</div>
                                <div className="name">{item.name}</div>
                            </div>
                        )
                    )
                }
            </div>

            <div className="box-sum  font-title">
                <div className="s-item">
                    Total: {parseInt(props.items.total)}
                </div>

                <div className="s-item">
                    Average: {parseInt(props.items.Average)}
                </div>
            </div>
        </div>
    );
};

export default BoxInfo;