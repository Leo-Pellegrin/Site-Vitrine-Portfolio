<template>
  <section class="p-24 bg-gray-50  opacity-0 transform translate-y-10 transition-all duration-700"
    ref="globalSectionRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Titre et toggle -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-16">
        <h2 class="text-5xl font-bold">Start a premium membership</h2>
        <SharedSwitchComponent v-model="isAnnual" leftLabel="Monthly" rightLabel="Yearly (20% off)" />
      </div>

      <!-- Grid des Plans -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard v-for="(plan, index) in pricingPlans" :key="index" :title="plan.title"
          :price="isAnnual ? plan.annualPrice : plan.monthlyPrice" :description="plan.description"
          :features="plan.features" :isHighlighted="plan.isHighlighted" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

const isAnnual = ref(false);

const pricingPlans = [
  {
    title: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "Get essential features to kickstart your journey to success.",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each year"
    ],
    isHighlighted: false
  },
  {
    title: "Business",
    monthlyPrice: "$89",
    annualPrice: "$71", // Réduction de 20%
    description: "Unlock the full potential of your business with our Business Plan.",
    features: [
      "200+ integrations",
      "Basic reporting and analytics",
      "Up to 20 individual users",
      "50GB individual data each year"
    ],
    isHighlighted: false
  },
  {
    title: "Enterprise",
    monthlyPrice: "$99",
    annualPrice: "$79", // Réduction de 20%
    description: "Craft your path to success with our comprehensive Enterprise Plan.",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Ultimate individual users",
      "80GB individual data each year",
      "Basic chat and email support"
    ],
    isHighlighted: true
  }
];

const globalSectionRef = ref < HTMLElement | null > (null);
// Observer la section globale pour appliquer l'animation
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (globalSectionRef.value) {
    observer.observe(globalSectionRef.value);
  }
});
</script>