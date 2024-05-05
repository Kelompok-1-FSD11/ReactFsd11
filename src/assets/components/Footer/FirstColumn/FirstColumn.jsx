import ListLinkFooter from '../../services/link/ListLinkFooter';
import FirstColumnChild from './FirstColumnChild';
import FirstColumnHeader from './FirstColumnHeader';

const FirstColumn = () => {
    return (
        <div className='flex w-2/4 desktop-small:w-3/4 justify-between space-x-8'>
            {ListLinkFooter.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <div className='space-y-6'>
                    {column.content.map((category) => (
                        <div className='space-y-3' key={category.id}>
                            <FirstColumnHeader footerName={category.header} />
                            <div className='space-y-2 flex flex-col'>
                                {category.child.map((child) => (
                                    <FirstColumnChild
                                        key={child.id}
                                        footerChildName={child.label}
                                        link={child.link}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FirstColumn;
