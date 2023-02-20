import { getDictionary } from "@/utils/getDictionary";
import { GetStaticProps } from "next";

const NotFound = () => {
    return (
        <h1>Não encontrado</h1>
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

export default NotFound;
