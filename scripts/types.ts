// types.ts

// Define the interface for the Configuration type
interface Configuration {
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  };
  git: {
    username: string;
    email: string;
  };
  ssh: {
    privateKey: string;
    publicKey: string;
  };
  k8s: {
    clusterName: string;
    namespace: string;
  };
}

// Define the interface for the Deployment type
interface Deployment {
  name: string;
  replicas: number;
  selector: {
    matchLabels: {
      app: string;
    };
  };
}

// Define the interface for the Pod type
interface Pod {
  name: string;
  containers: {
    name: string;
    image: string;
    ports: {
      containerPort: number;
    }[];
  }[];
}

// Define the interface for the Service type
interface Service {
  name: string;
  selector: {
    matchLabels: {
      app: string;
    };
  };
  ports: {
    port: number;
    targetPort: number;
  }[];
}

// Define the interface for the Ingress type
interface Ingress {
  name: string;
  rules: {
    host: string;
    http: {
      paths: {
        path: string;
        backend: {
          serviceName: string;
          servicePort: number;
        };
      }[];
    };
  }[];
}

// Define the interface for the Cluster type
interface Cluster {
  name: string;
  namespace: string;
  nodes: {
    name: string;
    role: string;
  }[];
}

// Define the interface for the Secret type
interface Secret {
  name: string;
  data: {
    [key: string]: string;
  };
}

// Define the interface for the ConfigMap type
interface ConfigMap {
  name: string;
  data: {
    [key: string]: string;
  };
}

// Export the interfaces
export { Configuration, Deployment, Pod, Service, Ingress, Cluster, Secret, ConfigMap };