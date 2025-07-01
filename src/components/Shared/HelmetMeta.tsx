import { Helmet } from "react-helmet";

type Props = {
    title: string;
    description: string;
}

const HelmetMeta = ({title, description}: Props) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={`${description}`} />
        </Helmet>
    )
}

export default HelmetMeta