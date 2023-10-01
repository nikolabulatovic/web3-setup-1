import { useAccount, useConnect } from 'wagmi';

const ConnectWalletModal = () => {
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();

  return (
    <div className="mt-2 p-2 text-center">
      {' '}
      {isConnected && <div>Connected to {activeConnector!.name}</div>}
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading && pendingConnector?.id === connector.id && ' (connecting)'}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default ConnectWalletModal;
