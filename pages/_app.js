import '../styles/globals.css'

global.Element = typeof Element === 'undefined' ? function () { } : Element;

//pages/_app.js
import React from 'react';
import Head from 'next/head';
import { InstUISettingsProvider } from "@instructure/emotion"
import { generateInstanceCounterMap } from '@instructure/ui-react-utils'
import Layout from '../components/Layout';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			{/* This is the important step */}
			<InstUISettingsProvider instanceCounterMap={generateInstanceCounterMap()}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</InstUISettingsProvider>
		</>
	);
}
