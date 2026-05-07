import heroImage from "@/assets/hero-shield.png";
import type {
  AdminDashboardData,
  FaqContent,
  FeatureContent,
  HomeContent,
  SetupContent,
} from "@/types/content";

export const dnsServers = {
  primary: "34.61.93.47",
  secondary: "Coming soon",
} as const;

// DNS server name
export const dnsServerNames = {
  primary: "guard.hifzio.com",
  secondary: "Coming soon",
} as const;

export const homeContent: HomeContent = {
  hero: {
    title: "Keep Your Family Safe Online, Effortlessly",
    description:
      "Hifzio Guard is a free, privacy-first filter that blocks adult content, gambling, and online threats across your entire home Wi-Fi. Protect all your devices instantly—no apps required.",
    primaryCta: {
      label: "Start Free Protection",
      href: "/setup",
      variant: "secondary",
    },
    secondaryCta: {
      label: "See how it works →",
      href: "/features",
      variant: "outline",
    },
    media: {
      type: "image",
      src: heroImage,
      alt: "Hifzio Guard dashboard showing family-safe internet protection across home devices",
    },
  },
  socialProof: [
    {
      icon: "zap",
      label: "Set up in 5 minutes",
      description:
        "No apps to install. Just update one setting on your router to protect your whole home.",
    },
    {
      icon: "shieldCheck",
      label: "Total home protection",
      description:
        "Phones, tablets, TVs, and consoles all get the same family-safe protection automatically.",
    },
    {
      icon: "lock",
      label: "100% private, zero logs",
      description:
        "We never track, store, or sell your browsing history. Your family's privacy comes first.",
    },
  ],
  steps: [
    {
      icon: "shield",
      title: "1. Choose your safety level",
      description:
        "Select a family-friendly profile designed to block harmful sites while keeping the internet useful and fun.",
      accent: "primary",
    },
    {
      icon: "settings",
      title: "2. Update your connection",
      description:
        "Follow our simple, step-by-step guide to connect your router or device to Hifzio Guard.",
      accent: "secondary",
    },
    {
      icon: "checkCircle",
      title: "3. Browse with peace of mind",
      description:
        "Adult content, scams, and malware are blocked instantly. Safe browsing begins right away.",
      accent: "accent",
    },
  ],
  finalCta: {
    heading: "Ready for a safer internet?",
    subheading:
      "Join thousands of families using Hifzio Guard to block harmful content and protect their homes. It's completely free, forever.",
    cta: {
      label: "Set up Hifzio Guard",
      href: "/setup",
      variant: "secondary",
    },
  },
};

export const testimonials = [
  {
    quote: "I used to worry every time my kids borrowed my iPad. Since setting up Hifzio Guard on our router, I have total peace of mind.",
    author: "Sarah Jenkins",
    role: "Mother of two",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "The best part is that there are no apps to install. I changed one setting, and now every device in the house is safe.",
    author: "Michael T.",
    role: "Parent & Teacher",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    quote: "Finally, a solution that respects our privacy. Free, fast, and doesn't log our browsing history.",
    author: "Elena R.",
    role: "Privacy Advocate",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const featureContent: FeatureContent = {
  title: "Powerful DNS parental control for clean, safe home internet",
  description:
    "Hifzio Guard filters traffic at the DNS layer so every device on your Wi-Fi gets the same family-safe protection. Block adult and harmful websites, enforce SafeSearch, reduce malware and phishing risks, and keep your privacy with a fast, zero-log DNS resolver.",
  features: [
    {
      icon: "shieldBan",
      title: "Block harmful & adult content",
      description:
        "Automatically stop pornography, explicit and obscene sites, gambling, dating, and other unsafe categories before pages ever load on your devices.",
      accent: "primary",
    },
    {
      icon: "search",
      title: "SafeSearch & YouTube Restricted",
      description:
        "Force SafeSearch on major search engines and lock YouTube into Restricted Mode to hide adult and sensitive videos across browsers and devices.",
      accent: "secondary",
    },
    {
      icon: "shieldCheck",
      title: "Malware & phishing shield",
      description:
        "Use constantly updated threat intelligence to block known malware, spyware, phishing, and scam domains—helping secure every click on your network.",
      accent: "accent",
    },
    {
      icon: "lock",
      title: "Privacy-first DNS with zero logs",
      description:
        "We operate with a strict zero-logs stance. We don’t store or sell your browsing history, and we don’t build advertising profiles from your DNS traffic.",
      accent: "primary",
    },
    {
      icon: "laptop",
      title: "Network-wide coverage",
      description:
        "Set Hifzio Guard at the router once and every connected device—including guest and smart home devices—automatically benefits from the same DNS filtering.",
      accent: "secondary",
    },
    {
      icon: "dollarSign",
      title: "Free forever for families",
      description:
        "Hifzio Guard’s core family-safe DNS filter is free to use with no trials, no credit card, and no surprise upsells—because safe internet should be accessible.",
      accent: "accent",
    },
  ],
  supportingStatement: {
    title: "Network-level protection without extra apps",
    description:
      "Unlike browser extensions or per-device parental control apps, Hifzio Guard runs at the DNS layer. Once your router or devices use our DNS servers, every phone, laptop, TV, console, and smart device on that network automatically gets the same clean, family-safe browsing experience.",
  },
};

export const setupContent: SetupContent = {
  dnsServers,
  guides: [
    {
      id: "router",
      name: "Router",
      icon: "router",
      description:
        "Protect every device on your home Wi-Fi in one go by changing the DNS on your router.",
      recommended: true,
      sections: [
        {
          steps: [
            {
              title: "Access your router's admin panel",
              description:
                "Open a browser, enter your router IP (e.g., 192.168.1.1), and sign in with your admin credentials (check the sticker under the router if you’re unsure).",
            },
            {
              title: "Find DNS or Internet settings",
              description:
                "Look for DNS, Network, Internet, or WAN settings; some routers list DNS servers under Advanced or LAN sections.",
            },
            {
              title: "Enter the Hifzio Guard DNS servers",
              description:
                "Replace any existing DNS entries with the Hifzio Guard family-safe DNS addresses below. If Secondary shows \"Coming soon,\" you can leave it blank for now.",
              callouts: [
                { label: "Primary DNS", value: dnsServers.primary },
                { label: "Secondary DNS", value: dnsServers.secondary },
              ],
            },
            {
              title: "Save and restart",
              description:
                "Apply the changes and restart the router if prompted. All devices on your Wi-Fi will now use Hifzio Guard’s filtered DNS.",
            },
          ],
        },
      ],
    },
    {
      id: "windows",
      name: "Windows",
      icon: "laptop",
      description: "Configure DNS on a single Windows PC for local protection.",
      sections: [
        {
          steps: [
            {
              title: "Open Network Connections",
              description:
                "Right-click the network icon → Open Network & Internet Settings → Advanced network settings.",
            },
            {
              title: "Edit adapter options",
              description:
                "Choose Wi-Fi or Ethernet → Properties → Internet Protocol Version 4 (TCP/IPv4).",
            },
            {
              title: "Use the DNS servers below",
              description:
                'Select "Use the following DNS server addresses" and enter the Hifzio Guard DNS values for IPv4.',
              callouts: [
                { label: "Preferred DNS", value: dnsServers.primary },
                { label: "Alternate DNS", value: dnsServers.secondary },
              ],
            },
            {
              title: "Confirm and restart",
              description:
                "Click OK to save, then restart your browser or PC to ensure the new DNS settings apply.",
            },
          ],
        },
      ],
    },
    {
      id: "mac",
      name: "macOS",
      icon: "laptop",
      description: "Configure DNS on any modern Mac for safer browsing.",
      sections: [
        {
          steps: [
            {
              title: "Open System Settings",
              description:
                "Click the Apple menu → System Settings (or System Preferences on older versions).",
            },
            {
              title: "Select Network",
              description:
                "Choose your active connection (Wi-Fi or Ethernet) and open the Advanced options.",
            },
            {
              title: "Update the DNS tab",
              description:
                "Add the Hifzio Guard DNS addresses in the DNS tab, then press OK to confirm.",
              callouts: [
                { label: "Primary DNS", value: dnsServers.primary },
                { label: "Secondary DNS", value: dnsServers.secondary },
              ],
            },
            {
              title: "Apply changes",
              description:
                "Click Apply to save. Your Mac’s traffic now goes through Hifzio Guard’s family-safe DNS filter.",
            },
          ],
        },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: "smartphone",
      description:
        "Protect iOS and Android phones or tablets individually with Hifzio Guard DNS.",
      sections: [
        {
          heading: "iOS / iPadOS",
          steps: [
            {
              title: "Open Wi-Fi settings",
              description: "Go to Settings → Wi-Fi, then tap the (i) icon next to your network.",
            },
            {
              title: "Configure DNS manually",
              description:
                "Tap Configure DNS → Manual, remove old servers, and add the new ones.",
            },
            {
              title: "Add Hifzio Guard DNS",
              description:
                "Add both Hifzio Guard DNS entries below, then tap Save to apply the change.",
              callouts: [
                { label: "DNS 1", value: dnsServerNames.primary },
                { label: "DNS 2", value: dnsServerNames.secondary },
              ],
            },
          ],
        },
        {
          heading: "Android",
          steps: [
            {
              title: "Open Wi-Fi settings",
              description:
                "Go to Settings → Network & Internet → Internet, then tap your active Wi-Fi network.",
            },
            {
              title: "Edit advanced options",
              description:
                "Choose Advanced or IP settings and switch from DHCP to Static or Custom if required by your device.",
            },
            {
              title: "Enter DNS addresses",
              description:
                "Fill DNS 1 and DNS 2 with the Hifzio Guard DNS values below and save the configuration.",
              callouts: [
                { label: "DNS 1", value: dnsServerNames.primary },
                { label: "DNS 2", value: dnsServerNames.secondary },
              ],
            },
          ],
        },
      ],
    },
  ],
  troubleshooting: [
    {
      title: "Settings didn't save?",
      description:
        "Double-check that you clicked Save or Apply in your router or device settings and restart the device or router if needed.",
    },
    {
      title: "Internet feels slow?",
      description:
        "DNS changes rarely cause speed issues. Try flushing the DNS cache or rebooting your router and modem to refresh connections.",
    },
    {
      title: "How do I verify it's working?",
      description:
        "Visit a site with adult content or use a DNS test page—Hifzio Guard should block it. You can also confirm your device’s DNS points to the Hifzio Guard servers.",
    },
  ],
};

export const faqContent: FaqContent = {
  faqs: [
    {
      question: "Is Hifzio Guard really free?",
      answer:
        "Yes. Hifzio Guard’s core family-safe DNS filtering is completely free to use with no upsells, trials, or hidden tiers. Our goal is to make clean, safe internet accessible to every household.",
    },
    {
      question: "How does Hifzio Guard work?",
      answer:
        "Hifzio Guard uses DNS filtering. When a device on your network requests a website, the domain is checked against our curated safety index. Harmful categories like adult content, gambling, and malware are blocked at the DNS layer before the page can load.",
    },
    {
      question: "Will it slow down my internet?",
      answer:
        "DNS lookups happen in milliseconds. Most homes don’t see any slowdown—and many notice faster browsing because malicious and tracking domains are blocked before they can connect.",
    },
    {
      question: "Can I whitelist or blacklist specific websites?",
      answer:
        "Today, Hifzio Guard focuses on simple, category-based protection that works out of the box. Custom allow/deny lists and per-profile policies are on our roadmap for future premium features.",
    },
    {
      question: "Do you log my browsing data?",
      answer:
        "No. We operate with a privacy-first, zero-log mindset. We don’t store or sell your DNS query history, and we don’t build advertising profiles from your traffic. Limited, aggregated metrics may be used only to keep the service reliable and secure.",
    },
    {
      question: "What if I need help with the setup?",
      answer:
        "Start with the guided Setup page for routers, Windows, macOS, iOS, and Android. If you get stuck, reach out to our support team and we’ll walk you through the DNS configuration step by step.",
    },
    {
      question: "Does it work on all devices?",
      answer:
        "Yes. Router-level setup covers every device on your home network automatically—phones, laptops, smart TVs, gaming consoles, and smart home devices all benefit from the same DNS filtering.",
    },
    {
      question: "What categories of content are blocked?",
      answer:
        "We focus on blocking adult content, pornography, gambling, malware, phishing, and violent or extremist material. SafeSearch is also enforced on major search engines where technically possible.",
    },
    {
      question: "Can I use Hifzio Guard at work or school?",
      answer:
        "Yes, as long as you’re allowed to manage DNS settings. Always coordinate with your IT or network administrator before changing DNS on company or school networks.",
    },
    {
      question: "Is Hifzio Guard a replacement for parental control software?",
      answer:
        "Hifzio Guard is a strong, DNS-level first line of defense that keeps harmful sites off your network. Many families combine DNS filtering with device-level parental control apps to manage screen time, apps, and social media for more complete protection.",
    },
  ],
  contactEmail: "support@hifzio.com",
};

export const adminDashboardData: AdminDashboardData = {
  overview: {
    kpis: [
      { label: "QPS (10m)", value: "8.3k", helper: "Peak 9.1k" },
      { label: "Success %", value: "98.9%", trend: "+0.6%" },
      { label: "Block %", value: "21.2%", trend: "content" },
      { label: "Rewrite %", value: "3.4%", helper: "SafeSearch" },
      { label: "Error %", value: "0.12%", helper: "SERVFAIL/NXDOMAIN" },
    ],
    latency: { p50: 18, p95: 42, p99: 87, window: "Last 10 min" },
    cacheHitRatio: { tenMinutes: 82, oneHour: 79 },
    handshake: { successRate: 99.2, window: "10m" },
    tls: {
      domain: "guard.hifzio.com",
      daysRemaining: 42,
      expiresOn: "2025-05-02T00:00:00Z",
      status: "ok",
    },
    charts: {
      qpsVsError: Array.from({ length: 12 }).map((_, index) => {
        const timestamp = new Date(
          Date.now() - (11 - index) * 5 * 60 * 1000,
        ).toISOString();
        return {
          timestamp,
          qps: 6200 + index * 180,
          errorPercent: 0.08 + (index % 3) * 0.02,
        };
      }),
      latencyP95: Array.from({ length: 12 }).map((_, index) => ({
        timestamp: new Date(
          Date.now() - (11 - index) * 5 * 60 * 1000,
        ).toISOString(),
        p95: 35 + (index % 4) * 4,
      })),
      trafficSplit: [
        { label: "Allow", value: 68, color: "hsl(var(--primary))" },
        { label: "Block", value: 25, color: "hsl(var(--destructive))" },
        { label: "Rewrite", value: 7, color: "hsl(var(--secondary))" },
      ],
    },
    healthBadges: [
      { title: "Upstreams", status: "healthy", description: "4/4 responsive" },
      {
        title: "DB / Queue",
        status: "healthy",
        description: "QueryBatcher clear",
      },
      {
        title: "Blocklist Sync",
        status: "degraded",
        description: "37m since last pull",
      },
    ],
    quickLinks: [
      {
        label: "Open Live Feed",
        description: "Filtered to errors",
        href: "/admin#live-feed",
      },
      {
        label: "Open Health",
        description: "Upstreams & TLS",
        href: "/admin#health",
      },
      {
        label: "Top Hot Domains",
        description: "Cache insights",
        href: "/admin#cache",
      },
    ],
    emptyState: "Waiting for traffic… Send test queries.",
  },
  liveFeed: {
    rows: [
      {
        id: "lf-1",
        timestamp: "2025-01-17T15:41:22Z",
        user: "Lena M.",
        device: "Lena-iPad",
        clientIp: "172.16.4.18",
        asn: "AS15169",
        proto: "DoT",
        qname: "safe-search.google.com",
        qtype: "A",
        action: "rewrite",
        upstream: "cache",
        latencyMs: 22,
        rcode: "NOERROR",
      },
      {
        id: "lf-2",
        timestamp: "2025-01-17T15:41:18Z",
        user: "Carlos R.",
        device: "Switch",
        clientIp: "10.20.1.5",
        asn: "AS13335",
        proto: "UDP",
        qname: "gaming-bets.io",
        qtype: "A",
        action: "block",
        upstream: "Quad9",
        latencyMs: 31,
        rcode: "NXDOMAIN",
      },
      {
        id: "lf-3",
        timestamp: "2025-01-17T15:41:11Z",
        user: "Priya K.",
        device: "Kids-TV",
        clientIp: "192.168.30.88",
        asn: "AS16509",
        proto: "TCP",
        qname: "api.netflix.com",
        qtype: "AAAA",
        action: "allow",
        upstream: "Cache",
        latencyMs: 18,
        rcode: "NOERROR",
      },
    ],
    filters: {
      timeRanges: ["Last 5m", "Last 10m", "Last 1h", "Custom"],
      actions: ["allow", "block", "rewrite", "error"],
      protocols: ["UDP", "TCP", "DoT"],
      rcodes: ["NOERROR", "NXDOMAIN", "SERVFAIL"],
    },
  },
  users: {
    items: [
      {
        id: "user-1",
        name: "Lena McConnell",
        email: "lena@hifzio.family",
        devices: 5,
        policy: "Family-Strict",
        lastActivity: "2m ago",
        role: "Admin",
      },
      {
        id: "user-2",
        name: "Carlos Rivera",
        email: "carlos@hifzio.family",
        devices: 3,
        policy: "Balanced",
        lastActivity: "14m ago",
        role: "Analyst",
      },
      {
        id: "user-3",
        name: "Priya Kapoor",
        email: "priya@hifzio.family",
        devices: 4,
        policy: "Homework",
        lastActivity: "1h ago",
        role: "Analyst",
      },
    ],
    roles: ["Admin", "Analyst"],
    lastActivityFilters: ["Active <5m", "Active <1h", "Dormant"],
  },
  devices: {
    items: [
      {
        id: "device-1",
        name: "Lena-iPad",
        platform: "iOS",
        hostname: "lena-2f3.guard.sni",
        lastSeen: "2025-01-17T15:40:30Z",
        ip: "172.16.4.18",
        asn: "AS15169",
        policy: "Family-Strict",
        status: "Online",
      },
      {
        id: "device-2",
        name: "Switch",
        platform: "Other",
        hostname: "switch-09.guard.sni",
        lastSeen: "2025-01-17T15:38:05Z",
        ip: "10.20.1.5",
        asn: "AS13335",
        policy: "Gaming",
        status: "Paused",
      },
      {
        id: "device-3",
        name: "Kids-TV",
        platform: "Android",
        hostname: "kids-tv.guard.sni",
        lastSeen: "2025-01-17T15:35:10Z",
        ip: "192.168.30.88",
        asn: "AS16509",
        policy: "Homework",
        status: "Online",
      },
    ],
    platforms: ["Android", "iOS", "Other"],
    statuses: ["Online", "Paused"],
    policies: ["Family-Strict", "Balanced", "Homework", "Gaming"],
  },
  policies: {
    items: [
      {
        id: "policy-1",
        name: "Family-Strict",
        owner: "Lena McConnell",
        safeSearch: true,
        categories: ["Adult", "Gambling", "Malware"],
        devices: 11,
        updatedAt: "2025-01-16T13:24:00Z",
        updatedBy: "Lena McConnell",
      },
      {
        id: "policy-2",
        name: "Balanced",
        owner: "Carlos Rivera",
        safeSearch: true,
        categories: ["Adult", "Malware"],
        devices: 6,
        updatedAt: "2025-01-15T08:11:00Z",
        updatedBy: "Carlos Rivera",
      },
      {
        id: "policy-3",
        name: "Homework",
        owner: "Priya Kapoor",
        safeSearch: true,
        categories: ["Adult", "Social"],
        devices: 4,
        updatedAt: "2025-01-14T20:45:00Z",
        updatedBy: "Priya Kapoor",
      },
    ],
    categories: ["Ads", "Adult", "Gambling", "Malware", "Social"],
  },
  overrides: {
    items: [
      {
        id: "ov-1",
        domain: "mathgames.com",
        action: "allow",
        scope: "User",
        target: "Priya Kapoor",
        hits: 132,
        createdAt: "2025-01-10T11:00:00Z",
        createdBy: "Priya Kapoor",
        expiresAt: "2025-02-10T11:00:00Z",
      },
      {
        id: "ov-2",
        domain: "twitch.tv",
        action: "block",
        scope: "Device",
        target: "Switch",
        hits: 54,
        createdAt: "2025-01-12T09:20:00Z",
        createdBy: "Carlos Rivera",
      },
    ],
  },
  health: {
    upstreams: [
      {
        id: "up-1",
        name: "Google",
        status: "Healthy",
        successRate: 99.3,
        avgLatency: 21,
        p95Latency: 38,
        lastFailure: "2025-01-16T23:12:00Z - timeout",
        retriesToday: 3,
      },
      {
        id: "up-2",
        name: "Cloudflare",
        status: "Healthy",
        successRate: 99.1,
        avgLatency: 24,
        p95Latency: 41,
        lastFailure: "2025-01-16T21:02:00Z - timeout",
        retriesToday: 1,
      },
      {
        id: "up-3",
        name: "Quad9",
        status: "Unhealthy",
        successRate: 92.2,
        avgLatency: 47,
        p95Latency: 88,
        lastFailure: "2025-01-17T14:52:00Z - NXDOMAIN spikes",
        retriesToday: 12,
      },
      {
        id: "up-4",
        name: "Custom Edge",
        status: "Healthy",
        successRate: 98.4,
        avgLatency: 29,
        p95Latency: 54,
        retriesToday: 4,
      },
    ],
    tls: {
      commonName: "guard.hifzio.com",
      sans: ["guard.hifzio.com", "*.guard.hifzio.com"],
      notBefore: "2024-11-02T00:00:00Z",
      notAfter: "2025-05-02T00:00:00Z",
      daysRemaining: 42,
      chainOk: true,
      lastRenewal: "2024-11-02T00:02:00Z",
      nextRenewal: "2025-04-28T12:00:00Z",
      lastErrors: [
        { label: "Handshake", count: 2 },
        { label: "SNI mismatch", count: 0 },
        { label: "Cipher", count: 0 },
      ],
    },
    timeseries: Array.from({ length: 12 }).map((_, index) => ({
      timestamp: new Date(
        Date.now() - (11 - index) * 5 * 60 * 1000,
      ).toISOString(),
      successRate: 98 + (index % 3),
      p95Latency: 40 + (index % 4) * 3,
    })),
  },
  cache: {
    summary: {
      hitRatio10m: 82,
      hitRatio1h: 79,
      items: 284_000,
      evictionsPerMin: 36,
      negativeHits: 412,
    },
    hotDomains: [
      {
        domain: "googleapis.com",
        hits10m: 1240,
        hits1h: 8120,
        avgTtl: 210,
        lastHit: "15s ago",
      },
      {
        domain: "roblox.com",
        hits10m: 980,
        hits1h: 6400,
        avgTtl: 180,
        lastHit: "32s ago",
      },
      {
        domain: "youtube.com",
        hits10m: 860,
        hits1h: 5900,
        avgTtl: 90,
        lastHit: "5s ago",
      },
    ],
    latency: {
      cacheMs: 18,
      upstreamMs: 27,
      policyMs: 6,
    },
  },
};

export const seoMetadata = {
  home: {
    title: "Hifzio Guard | Free Family-Safe DNS Filter for Home Wi-Fi",
    description:
      "Free, zero-log DNS parental control that blocks adult content, gambling, malware, and scams for every device on your home Wi-Fi. Enforce SafeSearch in minutes.",
    keywords: [
      "family-safe DNS",
      "free DNS content filter",
      "parental control DNS",
      "block adult content",
      "SafeSearch DNS",
      "malware blocking DNS",
      "home WiFi filter",
    ],
  },
  features: {
    title: "Hifzio Guard Features | DNS Parental Control & SafeSearch",
    description:
      "Explore Hifzio Guard’s DNS filtering features: adult and gambling blocking, SafeSearch enforcement, malware and phishing protection, and privacy-first zero-log DNS.",
    keywords: [
      "SafeSearch enforcement",
      "DNS parental control features",
      "family internet filter",
      "zero log DNS",
      "YouTube Restricted Mode",
      "DNS firewall",
    ],
  },
  setup: {
    title: "Hifzio Guard Setup Guide | Router & Device DNS Instructions",
    description:
      "Step-by-step DNS setup guides for routers, Windows, macOS, iOS, and Android so you can point your devices to Hifzio Guard and enable family-safe filtering in minutes.",
    keywords: [
      "DNS setup guide",
      "router DNS instructions",
      "Hifzio Guard setup",
      "family DNS filter install",
      "change DNS router",
      "configure DNS Windows",
    ],
  },
  faq: {
    title: "Hifzio Guard FAQ | Family-Safe DNS Help & Support",
    description:
      "Answers to common questions about how Hifzio Guard blocks adult content, enforces SafeSearch, protects privacy, and keeps home internet clean for kids and families.",
    keywords: [
      "Hifzio Guard FAQ",
      "family-safe DNS questions",
      "DNS filter support",
      "safe browsing for kids",
      "parental control DNS help",
    ],
  },
  admin: {
    title: "Hifzio Guard Admin Dashboard | Live DNS Protection & Analytics",
    description:
      "Monitor DNS traffic, SafeSearch rewrites, block rates, cache health, and upstream performance in the Hifzio Guard admin dashboard.",
    keywords: [
      "Hifzio Guard admin dashboard",
      "DNS analytics",
      "SafeSearch monitoring",
      "DNS protection dashboard",
      "DNS security metrics",
    ],
  },
  login: {
    title: "Hifzio Guard Login | Access Your Family DNS Protection",
    description:
      "Sign in to manage your Hifzio Guard DNS protection, parental control policies, and connected devices.",
    keywords: [
      "Hifzio Guard login",
      "family DNS login",
      "DNS filter account",
      "parental control DNS account",
    ],
  },
  profile: {
    title: "Hifzio Guard Profile | Manage Your DNS Account",
    description:
      "View and update your Hifzio Guard account details, DNS profiles, and notification preferences.",
    keywords: [
      "Hifzio Guard profile",
      "manage DNS account",
      "DNS filter settings",
      "account settings",
    ],
  },
  privacyPolicy: {
    title: "Hifzio Guard Privacy Policy | Zero-Log DNS & Data Protection",
    description:
      "Learn how Hifzio Guard handles data with a strict zero-log, privacy-first approach for family-safe DNS filtering.",
    keywords: [
      "Hifzio Guard privacy policy",
      "zero log DNS privacy",
      "family DNS privacy",
      "DNS data protection",
    ],
  },
  termsOfService: {
    title: "Hifzio Guard Terms of Service | Usage & Acceptable Use Policy",
    description:
      "Review the terms of service and acceptable use policy for using the Hifzio Guard family-safe DNS filter.",
    keywords: [
      "Hifzio Guard terms of service",
      "DNS filter terms",
      "acceptable use policy",
      "DNS service agreement",
    ],
  },
} as const;

export const staticContent = {
  home: homeContent,
  features: featureContent,
  setup: setupContent,
  faq: faqContent,
  admin: adminDashboardData,
};
