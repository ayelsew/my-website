import { getDictionary } from "@/utils/getDictionary";
import { GetStaticProps } from "next";

const InternalServerError = () => {
    return (
        <h1>Internal Server Error</h1>
    )
}


export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const t = await getDictionary();

    return {
        props: {
            t,
        }
    }
}

export default InternalServerError;
