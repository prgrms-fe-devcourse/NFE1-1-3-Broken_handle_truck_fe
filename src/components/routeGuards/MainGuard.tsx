import React, { useEffect } from 'react';
import useUserStore from '../../store/userStore';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import MainPage from '../../pages/MainPage';
import useAuthValidation from '../../hooks/useAuthValidation';

export default function MainGuard(): React.ReactElement {
	const { setUser, user } = useUserStore();
	const navigate = useFadeNavigate();
	const { data, isLoading } = useAuthValidation();

	useEffect(() => {
		if (!user) {
			if (!isLoading) {
				if (data?.user) {
					setUser(data.user);
					navigate('/map');
				}
			}
		}
	}, [isLoading, user, navigate, setUser, data?.user]);

	return <MainPage />;
}