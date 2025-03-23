const linkHoverBorder = {
  whileHover: { scale: 1.1, border: "1px solid black" }
}
const linkHoverTransition = {
  whileHover: {
    background: "#FFFFFF",
    color: "#131414",
    border: "2px solid #131414"
  }
}
const linkHover = {
  whileHover: { scale: 1.1 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 1 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export { linkHoverBorder, linkHoverTransition, fadeIn, fadeInUp, linkHover }
