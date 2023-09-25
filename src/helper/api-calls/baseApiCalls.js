const AuthGetToken = () =>
{
	const promise = new Promise((resolve, reject) =>
	{
		const token = localStorage.getItem('todoAccessToken');

		if(!token)
		{
			reject({ message: 'Token is not found', status: 10001 });
		}
		else
		{
			resolve(token);
		}
	});
	return promise;
};



const makeRequest = async(config, retry) =>
{
	const url = config.url;

	const requestConfig = {
		method: config.method,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const { body, isAuth } = config;

	if (body)
	{
		requestConfig.body = body;
	}

	if(!isAuth)
	{
		const token = await AuthGetToken();

		requestConfig.headers.Authorization = `Bearer ${token}`;
		const response = await fetch(url, requestConfig);

		if (response.status === 403)
		{
				window.location.href = '/';
				throw new Error('Failed after maximum retries.');
		}

		return response;
	}
	else
	{
		try
		{
			return fetch(url, requestConfig);
		}
		catch (error)
		{
			alert('Error while making api calls')
		}
	}
};

const get = (url) =>
{
	return makeRequest({ url, method: 'GET' });
};

const post = (url, body, isAuth = false) =>
{
	return makeRequest({ url, body, method: 'POST', isAuth});
};

const put = (url, body) =>
{
	return makeRequest({ url, body, method: 'PUT' });
};

const remove = (url) =>
{
	return makeRequest({ url, method: 'DELETE' });
};


export const BaseService = {
	get: get,
	post: post,
	put: put,
	remove: remove,
};