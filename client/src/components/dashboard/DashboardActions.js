import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div class="dash-buttons">
        <Link to="/edit-profile" class="btn btn-light"
          ><i class="fas fa-user-circle text-primary"></i> Edit Profile</Link>
        <Link to="/add-exp" class="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i> Add Experience</Link>
        <Link href="/post-web" class="btn btn-light"
          ><i class="fas fa-code text-primary"></i> Post Website</Link>
      </div>
    )
}

export default DashboardActions;