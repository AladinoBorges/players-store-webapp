import CircularProgress from '@material-ui/core/CircularProgress';

import '../styles/loadingPage.css';

function Loading() {
  return(
    <div className="loading_page">
      <CircularProgress />
    </div>
  );
}

export default Loading;
