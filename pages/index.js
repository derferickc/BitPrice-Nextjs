import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => (
	<Layout>
		<div>
			<h1>Welcome to BitzPrice</h1>
			<p>Check current Bitcoin rate</p>
			<Prices bpi={props.bpi} />
		</div>
	</Layout>
)

// getInitialProps runs right away
Index.getInitialProps = async function() {
	// variable that fetches json from coindesk API for current pricing of Bitcoin
	const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
	// when you fetch, returns promise, then need to map it to json
	const data = await res.json();

	return {
		bpi: data.bpi
	}
}

export default Index