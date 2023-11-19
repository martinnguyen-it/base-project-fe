import { handleCheckTokenExpired, handleClearAuthorization } from '@services';
import { authAtom } from '@stores';
import { useAtom } from 'jotai';
import { NextComponentType, NextPageContext } from 'next';
import { FC, useEffect } from 'react';

const withAuth = (
    Component: NextComponentType<NextPageContext, unknown>,
): NextComponentType => {
    const WrappedComponent: FC = (props) => {
        const [authStore] = useAtom(authAtom);

        useEffect(() => {
            handleCheckTokenExpired({
                accessToken: authStore?.accessToken,
                onLogout: handleClearAuthorization,
                onAuthenticated: () => {
                    return;
                },
            });
        }, [authStore?.accessToken]);

        return <Component {...props} />;
    };

    return WrappedComponent;
};

export default withAuth;
