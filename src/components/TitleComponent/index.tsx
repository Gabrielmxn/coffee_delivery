import Helmet from 'react-helmet';

interface TitleComponentProps {
  title: string
}
const TitleComponent = ({ title }: TitleComponentProps) => {
    const defaultTitle = 'Coffee Delivery';
    return (
        <Helmet>
            <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
        </Helmet>
    );
};

export { TitleComponent };