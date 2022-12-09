import { AppNav } from '@instructure/ui-navigation';
import { useRouter } from 'next/router';

const Nav = () => {
	const router = useRouter()
	return (<AppNav screenReaderLabel="App navigation" visibleItemsCount={3}>
		<AppNav.Item renderLabel="AAA" onClick={() => router.push("/")} />
		<AppNav.Item renderLabel="BBB" onClick={() => router.push("/bbb")} />
		<AppNav.Item renderLabel="CCCC" onClick={() => router.push("/ccc")} />
	</AppNav>);
}

export default Nav;
