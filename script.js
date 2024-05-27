const unitData = {
    currency: {
        units: ['USD', 'EUR', 'GBP', 'INR'],
        convert: (from, to, value) => {
            // Placeholder for API call or conversion table
            const rates = {
                USD: { EUR: 0.85, GBP: 0.75, INR: 74 },
                EUR: { USD: 1.18, GBP: 0.88, INR: 87 },
                GBP: { USD: 1.33, EUR: 1.14, INR: 98 },
                INR: { USD: 0.013, EUR: 0.011, GBP: 0.010 },
            };
            return value * rates[from][to];
        }
    },
    weight: {
        units: ['kg', 'grams', 'pounds'],
        convert: (from, to, value) => {
            const conversionRates = {
                kg: { grams: 1000, pounds: 2.20462 },
                grams: { kg: 0.001, pounds: 0.00220462 },
                pounds: { kg: 0.453592, grams: 453.592 },
            };
            return value * conversionRates[from][to];
        }
    },
    distance: {
        units: ['km', 'meters', 'cm', 'miles'],
        convert: (from, to, value) => {
            const conversionRates = {
                km: { meters: 1000, cm: 100000, miles: 0.621371 },
                meters: { km: 0.001, cm: 100, miles: 0.000621371 },
                cm: { km: 0.00001, meters: 0.01, miles: 0.00000621371 },
                miles: { km: 1.60934, meters: 1609.34, cm: 160934 },
            };
            return value * conversionRates[from][to];
        }
    },
    temperature: {
        units: ['Celsius', 'Fahrenheit', 'Kelvin'],
        convert: (from, to, value) => {
            if (from === to) return value;
            if (from === 'Celsius') {
                if (to === 'Fahrenheit') return value * 9/5 + 32;
                if (to === 'Kelvin') return value + 273.15;
            } else if (from === 'Fahrenheit') {
                if (to === 'Celsius') return (value - 32) * 5/9;
                if (to === 'Kelvin') return (value - 32) * 5/9 + 273.15;
            } else if (from === 'Kelvin') {
                if (to === 'Celsius') return value - 273.15;
                if (to === 'Fahrenheit') return (value - 273.15) * 9/5 + 32;
            }
        }
    },
    volume: {
        units: ['liters', 'milliliters', 'gallons'],
        convert: (from, to, value) => {
            const conversionRates = {
                liters: { milliliters: 1000, gallons: 0.264172 },
                milliliters: { liters: 0.001, gallons: 0.000264172 },
                gallons: { liters: 3.78541, milliliters: 3785.41 },
            };
            return value * conversionRates[from][to];
        }
    },
    speed: {
        units: ['m/s', 'km/h', 'mph'],
        convert: (from, to, value) => {
            const conversionRates = {
                'm/s': { 'km/h': 3.6, 'mph': 2.23694 },
                'km/h': { 'm/s': 0.277778, 'mph': 0.621371 },
                'mph': { 'm/s': 0.44704, 'km/h': 1.60934 },
            };
            return value * conversionRates[from][to];
        }
    },
    time: {
        units: ['seconds', 'minutes', 'hours'],
        convert: (from, to, value) => {
            const conversionRates = {
                seconds: { minutes: 1/60, hours: 1/3600 },
                minutes: { seconds: 60, hours: 1/60 },
                hours: { seconds: 3600, minutes: 60 },
            };
            return value * conversionRates[from][to];
        }
    },
    area: {
        units: ['sq meters', 'sq kilometers', 'sq miles'],
        convert: (from, to, value) => {
            const conversionRates = {
                'sq meters': { 'sq kilometers': 1e-6, 'sq miles': 3.861e-7 },
                'sq kilometers': { 'sq meters': 1e6, 'sq miles': 0.386102 },
                'sq miles': { 'sq meters': 2.59e6, 'sq kilometers': 2.58999 },
            };
            return value * conversionRates[from][to];
        }
    },
    energy: {
        units: ['joules', 'calories', 'kWh'],
        convert: (from, to, value) => {
            const conversionRates = {
                joules: { calories: 0.239006, kWh: 2.77778e-7 },
                calories: { joules: 4.184, kWh: 1.16279e-6 },
                kWh: { joules: 3.6e6, calories: 860421 },
            };
            return value * conversionRates[from][to];
        }
    },
    power: {
        units: ['watts', 'kilowatts', 'horsepower'],
        convert: (from, to, value) => {
            const conversionRates = {
                watts: { kilowatts: 0.001, horsepower: 0.00134102 },
                kilowatts: { watts: 1000, horsepower: 1.34102 },
                horsepower: { watts: 745.7, kilowatts: 0.7457 },
            };
            return value * conversionRates[from][to];
        }
    },
    dataStorage: {
        units: ['bits', 'bytes', 'kilobits', 'kilobytes', 'megabits', 'megabytes', 'gigabits', 'gigabytes'],
        convert: (from, to, value) => {
            const conversionRates = {
                bits: { bytes: 0.125, kilobits: 0.001, kilobytes: 0.000125, megabits: 1e-6, megabytes: 1.25e-7, gigabits: 1e-9, gigabytes: 1.25e-10 },
                bytes: { bits: 8, kilobits: 0.008, kilobytes: 0.001, megabits: 8e-6, megabytes: 1e-6, gigabits: 8e-9, gigabytes: 1e-9 },
                kilobits: { bits: 1000, bytes: 125, kilobytes: 0.125, megabits: 0.001, megabytes: 0.000125, gigabits: 1e-6, gigabytes: 1.25e-7 },
                kilobytes: { bits: 8000, bytes: 1000, kilobits: 8, megabits: 0.008, megabytes: 0.001, gigabits: 8e-6, gigabytes: 1e-6 },
                megabits: { bits: 1e6, bytes: 125000, kilobits: 1000, kilobytes: 125, megabytes: 0.125, gigabits: 0.001, gigabytes: 0.000125 },
                megabytes: { bits: 8e6, bytes: 1e6, kilobits: 8000, kilobytes: 1000, megabits: 8, gigabits: 0.008, gigabytes: 0.001 },
                gigabits: { bits: 1e9, bytes: 125e6, kilobits: 1e6, kilobytes: 125000, megabits: 1000, megabytes: 125, gigabytes: 0.125 },
                gigabytes: { bits: 8e9, bytes: 1e9, kilobits: 8e6, kilobytes: 1e6, megabits: 8000, megabytes: 1000, gigabits: 8 },
            };
            return value * conversionRates[from][to];
        }
    },
    acceleration: {
        units: ['m/s²', 'ft/s²', 'km/h²', 'mi/h²'],
        convert: (from, to, value) => {
            const conversionRates = {
                'm/s²': { 'ft/s²': 3.28084, 'km/h²': 12960, 'mi/h²': 8053.5 },
                'ft/s²': { 'm/s²': 0.3048, 'km/h²': 3950.52, 'mi/h²': 2681.82 },
                'km/h²': { 'm/s²': 0.0000771605, 'ft/s²': 0.000253611, 'mi/h²': 0.204 },
                'mi/h²': { 'm/s²': 0.000124174, 'ft/s²': 0.000372153, 'km/h²': 4.9 },
            };
            return value * conversionRates[from][to];
        }
    },
    pressure: {
        units: ['pascals', 'atmospheres', 'psi'],
        convert: (from, to, value) => {
            const conversionRates = {
                pascals: { atmospheres: 9.86923e-6, psi: 0.000145038 },
                atmospheres: { pascals: 101325, psi: 14.6959 },
                psi: { pascals: 6894.76, atmospheres: 0.0680459 },
            };
            return value * conversionRates[from][to];
        }
    },
};

const categorySelect = document.getElementById('category');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const fromValueInput = document.getElementById('fromValue');
const toValueInput = document.getElementById('toValue');

function updateUnits() {
    const category = categorySelect.value;
    const units = unitData[category].units;

    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;

        fromUnitSelect.appendChild(option1);
        toUnitSelect.appendChild(option2);
    });
}

function convert() {
    const category = categorySelect.value;
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const fromValue = parseFloat(fromValueInput.value);

    if (isNaN(fromValue)) {
        alert('Please enter a valid number.');
        return;
    }

    let result;

    if (unitData[category] && unitData[category].convert) {
        result = unitData[category].convert(fromUnit, toUnit, fromValue);
    } else {
        alert('Conversion logic for this category is not implemented.');
        return;
    }

    toValueInput.value = result;
}

// Initial setup
updateUnits();
categorySelect.addEventListener('change', updateUnits);
fromUnitSelect.addEventListener('change', convert);
toUnitSelect.addEventListener('change', convert);
fromValueInput.addEventListener('input', convert);
