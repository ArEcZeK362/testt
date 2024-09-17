import { PHASE_PRODUCTION_BUILD } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
	reactStrictMode: true,

	env: {
		SKIP_API_DURING_BUILD: phase === PHASE_PRODUCTION_BUILD ? 'true' : 'false',
	},
});

export default nextConfig;
