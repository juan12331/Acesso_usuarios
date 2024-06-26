
// essa parte é utilizada para previnir erros envolvondo CORS

const headers = {
    async headers() {
        return [
            {
                source: '/:path*', // Matches all routes
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
                    { key: 'Access-Control-Allow-Headers', value: '*' }, // Allow any headers
                ]
            }
        ];
    }
};

module.exports = headers