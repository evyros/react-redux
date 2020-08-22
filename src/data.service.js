import axios from 'axios';

class DataService {

	static async getData() {
		try {
			return await axios.get('https://api.github.com/orgs/octokit/repos');
		} catch (err) {
			return err;
		}
	}

}

export default DataService;
