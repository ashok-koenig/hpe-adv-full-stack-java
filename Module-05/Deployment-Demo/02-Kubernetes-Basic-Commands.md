# Kubernetes Basic Commands - kubectl
### Get the Kubernetes version 
```
kubectl version
```
### List all the nodes
```
kubectl get nodes
```
### List all pods
```
kubectl get pods
```
### Create a pod from image
```
kubectl run webapp-pod --image=ashokkoenig/webapp
```
### port forward the pod to test the web app
```
kubectl port-forward pod/webapp-pod 80:80
```
- Test the web app at http://localhost using web browser
- use ```ctrl + c``` to stop port forward

### Detailed information about a pod
```
kubectl describe pod webapp-pod
```
## Working with Configuration file in K8s
### Deployment Configuration
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
        - name: webapp
          image: ashokkoenig/webapp:latest
          ports:
            - containerPort: 80
```
### Service Configuration
```
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  select:
    app: webapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP
```
### Apply configuration
```
cd webapp
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
### port forward the pod to test the web app
```
kubectl port-forward deployment/webapp 80:80
```
- Test the web app at http://localhost using web browser
- use ```ctrl + c``` to stop port forward

### Test how kubernetes maintain the desired state
```
kubectl get pods
kubectl delete pod <any-pod-name>
kubectl get pods
```