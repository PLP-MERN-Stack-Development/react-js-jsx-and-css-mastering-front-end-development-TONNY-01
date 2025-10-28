const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-medium leading-6 text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

const CardBody = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardBody, CardFooter };
