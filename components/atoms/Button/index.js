import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const { title, href } = props
    return (
        <div className="b animate-pulse mr-2 lg:mr-10 h-10 w-[130px]  lg:w-40 flex justify-center items-center">
            <div className="i h-10 lg:w-40 w-[130px] bg-yellow items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
            <a href={href} className="text-center text-white font-medium text-sm z-10 pointer-events-none">
                {title}
            </a>
        </div>
    )
}

Button.propTypes = {}

export default Button
