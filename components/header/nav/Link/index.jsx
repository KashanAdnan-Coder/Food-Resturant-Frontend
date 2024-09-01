import Link from "next/link"
import { motion } from "framer-motion"
import { slide } from "../../anim"

const index = ({ data }) => {
    return (
        <motion.div custom={data.index} variants={slide} animate="enter" exit="exit" initial="initial">
            <Link className="text-white font-[300]" href={data.href}>
                {data.title}
            </Link>
        </motion.div>
    )
}

export default index
