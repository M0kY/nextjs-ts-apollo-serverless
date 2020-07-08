import React from 'react';

const BuildVersion = () => {
  const buildVersion = process.env.NEXT_PUBLIC_GH_BRANCH
    ? `${process.env.NEXT_PUBLIC_APP_VERSION}-#${process.env.NEXT_PUBLIC_GH_BRANCH}-${process.env.NEXT_PUBLIC_GH_COMMIT_HASH_SHORT}-${process.env.NEXT_PUBLIC_GH_RUN_NUMBER}`
    : 'hotbuild';

  return <div>Version: {buildVersion}</div>;
};

export default BuildVersion;
