export const projects = [
  {
    name: "Crypto Payment Gateway",
    stack: ["Python", "FastAPI", "Electrum", "XRPL WebSockets", "Monero wallet"],
    description:
      "Generates deposit addresses and verifies on chain payments for BTC, LTC, XMR, and XRP. Unified confirmations API and detailed logging."
  },
  {
    name: "Postage via Crypto",
    stack: ["React", "FastAPI", "PostgreSQL", "AWS"],
    description:
      "Customers buy postage labels using crypto. Address validation API designed to mirror Shippo fields. Labels formatted for 4×6 and A4 variants."
  },
  {
    name: "CARLA + Autoware Synthetic Data",
    stack: ["CARLA", "Autoware", "OpenCV", "ROS"],
    description:
      "Created rare object scenarios and generated RGB, semantic maps, instance masks, and LiDAR. Improved bounding boxes and applied augmentation for better perception accuracy."
  }
] as const;
