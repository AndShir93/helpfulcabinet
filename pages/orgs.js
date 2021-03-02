import { processUsecase } from '../libs/usecases';
import Orgs from '../components/core/Orgs';

export default function OrgsPage(props) {
  return <Orgs {...props} />;
}

export async function getServerSideProps(context) {
  return processUsecase(context, 'orgs');
}
